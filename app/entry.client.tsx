import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { createCache, StyleProvider } from '@ant-design/cssinjs'

const ClientCacheProvider = ({ children }: { children: React.ReactNode }) => {
  const cache = createCache()

  return <StyleProvider cache={cache}>{children}</StyleProvider>
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ClientCacheProvider>
        <RemixBrowser />
      </ClientCacheProvider>
    </StrictMode>
  )
})
