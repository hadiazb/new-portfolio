import { ReactElement } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { MainLayout } from '@/infrastructure/ui/components'
import { SplashView } from '@/infrastructure/ui/modules'

export type SplashPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const SplashPage = (props: SplashPageProps): ReactElement => {
    return <SplashView splashImages={props.splashImages} />
}

export default SplashPage

const getLayout = (page: ReactElement): ReactElement => <MainLayout>{page}</MainLayout>

SplashPage.getLayout = getLayout

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const deskSplash = './assets/images/splash-desk.png'
    const mobileSplash = './assets/images/splash-mobile.png'

    return {
        props: {
            splashImages: {
                desk: deskSplash,
                mobile: mobileSplash,
            },
        },
    }
}
