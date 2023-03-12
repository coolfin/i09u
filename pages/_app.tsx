import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalNav } from '@/layout/GlobalNav'

import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { AppPropsWithLayout } from '@/@types/next'
import React from 'react'
import { Container } from '@/components/Container'
import { GlobalFooter } from '@/layout/GlobalFooter'


//페이지 적용 공통 레이아웃

//<Router, Props>
// P : props, T: type 
//ReactNode 타입은 jsx 내에서 사용할 수 있는 모든 요소의 타입


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  //optional chaining ?? : null , undefined일때 >>로  -> null, undefined를 포함하기때문에
  //getLayout은 Component의 타입인 AppPropsWithLayout의 NextPageWithLayout의 getLayout에 의해 가능 
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => <><GlobalNav />{page}<GlobalFooter/></>);
  return (
    <>
      <Head>
        <meta name='charset' content='UTF-8' />
        <meta name='viewport' content='width = device-width, initial-scale = 1.0' />

        <title>서흥공구</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name='author' content='박 상우' />
        <meta name='title' content='서흥공구' />
        <meta name='og:title' content='서흥공구' />
        <meta name='description' content='서흥공구 회사의 소개 페이지입니다' />
        <meta name='og:description' content='서흥공구 회사의 소개 페이지입니다' />
        {/* <meta name='og:url' content='https://sh09.com' /> */}

      </Head>
      <GeistProvider themeType='dark'>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </GeistProvider>
    </>
  )
}