import { ReactElement } from 'react'

import { MainLayout } from '@/infrastructure/ui/components'
import { HomeView } from '@/infrastructure/ui/modules'

const HomePage = (): ReactElement => {
    return (
        <HomeView photo="https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FProfile%2FFotosHugo%2Fprofile.jpg?alt=media&token=7752a102-74bd-42d1-96d3-1445c426e499" />
    )
}

export default HomePage

const getLayout = (page: ReactElement): ReactElement => <MainLayout>{page}</MainLayout>

HomePage.getLayout = getLayout
