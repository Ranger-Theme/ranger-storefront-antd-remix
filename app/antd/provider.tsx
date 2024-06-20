import { createCache, StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  const cache = createCache()

  return (
    <StyleProvider cache={cache} ssrInline>
      <ConfigProvider>{children}</ConfigProvider>
    </StyleProvider>
  )
}

export default AntdProvider
