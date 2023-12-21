import type { NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils'

declare module 'next'{
    export declare type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
        hasAppBar?: boolean
        navigation?: boolean
    }
}