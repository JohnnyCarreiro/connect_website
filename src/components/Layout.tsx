import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Header } from './Header'
import Navbar from './Navbar'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar/>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </>
)


