import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'

const hydrate = async () => {
  await startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
          <RemixBrowser />
        </StyleProvider>
      </StrictMode>
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  window.setTimeout(hydrate, 1)
}
