import { PassThrough } from 'node:stream'
import { createReadableStreamFromReadable } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { renderToPipeableStream } from 'react-dom/server'
import { isbot } from 'isbot'
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs'
import type { EntryContext } from '@remix-run/node'

const ABORT_DELAY = 5_000

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const callbackName = isbot(request.headers.get('user-agent')) ? 'onAllReady' : 'onShellReady'

  return new Promise((resolve, reject) => {
    let shellRendered = false
    let isStyleExtracted = false
    const cache = createCache()

    const { pipe, abort } = renderToPipeableStream(
      <StyleProvider cache={cache}>
        <RemixServer context={remixContext} url={request.url} abortDelay={ABORT_DELAY} />
      </StyleProvider>,
      {
        [callbackName]: () => {
          shellRendered = true
          const body = new PassThrough({
            transform(chunk, _, callback) {
              const styleText = extractStyle(cache)

              if (!isStyleExtracted) {
                const str: string = chunk.toString()
                if (str.includes('__ANTD_STYLE__')) {
                  chunk = str.replace('__ANTD_STYLE__', styleText)
                  isStyleExtracted = true
                }
              }

              callback(null, chunk)
            }
          })
          const stream = createReadableStreamFromReadable(body)

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          )

          pipe(body)
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          responseStatusCode = 500

          if (shellRendered) {
            console.error(error)
          }
        }
      }
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
