import { FC, ReactElement } from 'react'

// base components
import { Box, Typography } from '@/infrastructure/ui/components'

export interface LoginViewProps {
    title: string
}

const LoginView: FC<LoginViewProps> = ({ title }): ReactElement => {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h1">{title}</Typography>
            </Box>
        </>
    )
}

export default LoginView
