import { MainLayout } from '@/infrastructure/ui/components'
import { HomeView } from '@/infrastructure/ui/modules'
import { ReactElement } from 'react'

const HomePage = (): ReactElement => {
    return <HomeView title="Site is being built" />
}

export default HomePage

const getLayout = (page: ReactElement): ReactElement => <MainLayout>{page}</MainLayout>

HomePage.getLayout = getLayout
