import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GeistProvider, CssBaseline } from '@geist-ui/core'


//페이지 적용 공통 레이아웃
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <meta name='charset' content='UTF-8' />
      <meta name='viewport' content='width = device-width, initial-scale = 1.0' />

      <title>서흥공구</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name='keywords' content='i09u sh09 서흥공구 서흥' />
      <meta name='author' content='coolfin' />
      <meta name='title' content='서흥공구' />
      <meta name='description' content='서흥공구 회사 소개 페이지'/>
    </Head>
  <GeistProvider>
    <CssBaseline />
    <Component {...pageProps} />
  </GeistProvider>
    </>
  )
}
