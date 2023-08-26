import { ReactElement } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { MainLayout } from '@/infrastructure/ui/components'
import { HomeView } from '@/infrastructure/ui/modules'

export type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const HomePage = (props: HomePageProps): ReactElement => {
    return (
        <HomeView
            profile={props.profileData}
            images={props.images}
            socialMedia={props.socialMedia}
        />
    )
}

export default HomePage

const getLayout = (page: ReactElement): ReactElement => (
    <MainLayout metaData={page.props.children.props.metaData}>{page}</MainLayout>
)

HomePage.getLayout = getLayout

export interface Props {
    images: {
        photo: string
        bgHead: string
    }
    profileData: {
        name: string
        job: string
        description: string
        location: string
    }
    socialMedia: string[]
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

    const profileData = {
        name: 'Hugo Andrés Díaz Bernal',
        job: 'Software Developer',
        description: 'JavaScript Enthusiastic',
        location: 'Bogotá Colombia',
    }

    return {
        props: {
            images: {
                photo,
                bgHead,
            },
            profileData,
            socialMedia: ['GitHub', 'LinkedIn', 'Twitter'],
            metaData: {
                title: 'Portafolio de Hugo',
                description: 'Pagina principal del portafolio de Hugo Andrés Díaz Bernal',
                keywords: 'Developer, Next, React, Frontend, Backend, Nodejs, Azure',
                icon: '/favicon.ico',
            },
        },
    }
}
