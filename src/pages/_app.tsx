/* eslint-disable @typescript-eslint/ban-types */
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'

// state managements
import { StateLayout } from '@/infrastructure/ui/components'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout): ReactNode {
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(
        <StateLayout>
            <Component {...pageProps} />
        </StateLayout>,
    )
}
