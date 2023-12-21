import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import '../styles/font.css'
import CssBaseline from '@mui/material/CssBaseline';
import {theme} from '@/theme/theme'
import {ThemeProvider} from '@mui/material/styles';
import Layout from '../layout/index'
import {EmotionCache} from "@emotion/react";
import {NextPage} from "next";
import Head from "next/head";

type ExtendedAppProps = AppProps & {
    Component: NextPage
    emotionCache: EmotionCache
}

export default function App({Component, pageProps}: ExtendedAppProps) {
    const hasAppBar = Component.hasAppBar ?? true
    const navigation = Component.navigation ?? true

    return (
        <ThemeProvider theme={theme}>
            <Layout hasAppBar={hasAppBar}
                    navigation={navigation}>
                <CssBaseline/>
                <Head>
                    <title>بیمارستان نفت</title>
                </Head>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}
