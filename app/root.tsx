import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { ThemeProvider } from 'styled-components'
import './tailwind.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {typeof document === 'undefined' ? '__ANTD__' : ''}
        <Meta />
        <Links />
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
      <ThemeProvider theme={{}}>
        <Outlet />
      </ThemeProvider>
    </div>
  )
}
