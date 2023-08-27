import { ReactElement } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { MainLayout } from '@/infrastructure/ui/components'
import { HomeView } from '@/infrastructure/ui/modules'

// interfaces
import { AboutMe } from '@/infrastructure/ui/modules/HomeModule/interfaces'

export type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const HomePage = (props: HomePageProps): ReactElement => {
    return <HomeView aboutMe={props.aboutMe} />
}

export default HomePage

const getLayout = (page: ReactElement): ReactElement => (
    <MainLayout metaData={page.props.children.props.metaData}>{page}</MainLayout>
)

HomePage.getLayout = getLayout

export interface Props {
    aboutMe: AboutMe
    metaData?: {
        title: string
        description: string
        keywords: string
        icon: string
    }
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const photo =
        'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FProfile%2FFotosHugo%2Fprofile.jpg?alt=media&token=7752a102-74bd-42d1-96d3-1445c426e499'
    const bgHead = 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'

    const profile = {
        name: 'Hugo Andrés Díaz Bernal',
        job: 'Software Developer',
        description: 'JavaScript Enthusiastic',
        location: 'Bogotá Colombia',
    }

    return {
        props: {
            aboutMe: {
                images: {
                    photo,
                    bgHead,
                },
                profile,
                socialMedia: ['GitHub', 'LinkedIn', 'Twitter'],
            },
            metaData: {
                title: 'Portafolio de Hugo Andrés Díaz Bernal',
                description:
                    'Pagina principal o Home del portafolio de Hugo Andrés Díaz Bernal, en el cual se trata de mostrar el trabajo más representativo de este desarrollador',
                keywords: 'Developer, Next, React, Frontend, Backend, Nodejs, Azure',
                icon: '/favicon.ico',
            },
        },
    }
}
