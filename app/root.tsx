import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import type { LinksFunction } from '@remix-run/node'
import RootCSS from './tailwind.css?url'

import AppShell from '@/components/AppShell'

const isBrowser = () => {
  return typeof window !== 'undefined' && window.document && window.document.createElement
}

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: RootCSS }]
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
        {!isBrowser() && '__CSS_IN_JSS__'}
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
      <AppShell>
        <Outlet />
      </AppShell>
    </div>
  )
}
