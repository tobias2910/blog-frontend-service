import '../assets/main.css'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import Layout from '../components/common/Layout'
import ScrollProvider from '../lib/context/ScrollProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollProvider>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ScrollProvider>
  )
}

export default MyApp
