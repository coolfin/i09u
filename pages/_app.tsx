import '@/styles/globals.css'
import Head from 'next/head'
import { GlobalNav } from '@/layout/GlobalNav'

import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { AppPropsWithLayout } from '@/@types/next'
import React from 'react'
import { GlobalFooter } from '@/layout/GlobalFooter'


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => <><GlobalNav />{page}<GlobalFooter/></>);
  return (
    <>
      <Head>
        <meta name='charset' content='UTF-8' />
        <meta name='viewport' content='width = device-width, initial-scale = 1.0' />

        <title>서흥공구</title>
        <link rel="icon" href="/images/logo.png" />

        <meta name='author' content='박 상우' />
        <meta name='title' content='서흥공구' />
        <meta name='og:title' content='서흥공구' />
        <meta name='description' content='서흥공구 회사의 소개 페이지입니다' />
        <meta name='og:description' content='서흥공구 회사의 소개 페이지입니다' />
        
        <meta name="naver-site-verification" content="cf4696058b5fad05486b70c7ad909332707e4080" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />

      </Head>
      <GeistProvider themeType='dark'>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </GeistProvider>
    </>
  )
}