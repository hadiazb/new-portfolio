import { ReactElement } from 'react'

import { MainLayout } from '@/infrastructure/ui/components'
import { HomeAdminView } from '@/infrastructure/ui/modules'

const HomeAdminPage = (): ReactElement => {
    return <HomeAdminView title="Admin of home" />
}

export default HomeAdminPage

const getLayout = (page: ReactElement): ReactElement => <MainLayout>{page}</MainLayout>

HomeAdminPage.getLayout = getLayout
