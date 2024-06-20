import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import './tailwind.css'

function isBrowser() {
  return typeof window !== 'undefined' && window.document && window.document.createElement
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="renderer" content="webkit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {!isBrowser() && '__ANTD_STYLE__'}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <div id="__remix">
      <AntdConfigProvider>
        <Outlet />
      </AntdConfigProvider>
    </div>
  )
}
