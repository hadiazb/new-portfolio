import { FC, ReactElement } from 'react'

// base components
import { Box, Typography } from '../../components'

export interface HomeViewProps {
    title: string
}

const HomeView: FC<HomeViewProps> = ({ title }): ReactElement => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Typography variant="h1">{title}</Typography>
        </Box>
    )
}

export default HomeView
