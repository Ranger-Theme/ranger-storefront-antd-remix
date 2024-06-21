import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

const hydrate = async () => {
  await startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <StyleSheetManager>
          <ThemeProvider theme={{}}>
            <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
              <AntdConfigProvider>
                <RemixBrowser />
              </AntdConfigProvider>
            </StyleProvider>
          </ThemeProvider>
        </StyleSheetManager>
      </StrictMode>
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  window.setTimeout(hydrate, 1)
}
