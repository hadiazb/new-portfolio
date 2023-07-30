import { ReactElement } from 'react'

import { MainLayout } from '@/infrastructure/ui/components'
import { SplashView } from '@/infrastructure/ui/modules'

const HomePage = (): ReactElement => {
    return <SplashView />
}

export default HomePage

const getLayout = (page: ReactElement): ReactElement => <MainLayout>{page}</MainLayout>

HomePage.getLayout = getLayout
