import { ReactElement } from 'react'

import { MainLayout } from '@/infrastructure/ui/components'
import { LoginView } from '@/infrastructure/ui/modules'

const LoginPage = (): ReactElement => {
    return <LoginView title="Login" />
}

export default LoginPage

const getLayout = (page: ReactElement): ReactElement => <MainLayout>{page}</MainLayout>

LoginPage.getLayout = getLayout
