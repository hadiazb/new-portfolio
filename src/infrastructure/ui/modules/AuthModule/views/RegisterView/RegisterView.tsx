import { FC, ReactElement } from 'react'

// base components
import { Box, Typography } from '@/infrastructure/ui/components'

export interface RegisterViewProps {
    title: string
}

const RegisterView: FC<RegisterViewProps> = ({ title }): ReactElement => {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h1">{title}</Typography>
            </Box>
        </>
    )
}

export default RegisterView
