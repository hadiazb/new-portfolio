import { ReactElement } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { MainLayout } from '@/infrastructure/ui/components'
import { SplashView } from '@/infrastructure/ui/modules'

export type SplashPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const SplashPage = (props: SplashPageProps): ReactElement => {
    return <SplashView splashImages={props.splashImages} />
}

export default SplashPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainLayout metaData={page.props.children.props.metaData} >{page}</MainLayout>
)

SplashPage.getLayout = getLayout

export interface Props {
    splashImages: {
        desk: string
        mobile: string
    },
    metaData?: {
        title: string
        description: string
        keywords: string
        icon?: string
    }
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const deskSplash = './assets/images/splash-desk.png'
    const mobileSplash = './assets/images/splash-mobile.png'

    return {
        props: {
            splashImages: {
                desk: deskSplash,
                mobile: mobileSplash,
            },
            metaData: {
                title: 'Protafolio de Hugo Andres Diaz Bernal',
                description: 'Desarrollador Javascript y TypeScript',
                keywords: 'React, Angular, Node, NextJS, Redux'
            }
        },
    }
}
