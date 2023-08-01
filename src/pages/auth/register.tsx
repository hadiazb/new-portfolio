import { ReactElement } from 'react'

import { MainLayout } from '@/infrastructure/ui/components'
import { RegisterView } from '@/infrastructure/ui/modules'

const RegisterPage = (): ReactElement => {
    return <RegisterView title="register" />
}

export default RegisterPage

const getLayout = (page: ReactElement): ReactElement => <MainLayout>{page}</MainLayout>

RegisterPage.getLayout = getLayout
