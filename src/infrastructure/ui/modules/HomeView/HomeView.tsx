import { FC, ReactElement } from 'react'

// base components
import { Box, MobileMenu, Typography } from '../../components'

const options = [
    {
        label: 'About Me',
        fontSize: 11,
        icon: 'Person2',
    },
    {
        label: 'Projects',
        fontSize: 11,
        icon: 'Work',
    },
    {
        label: 'Blog',
        fontSize: 11,
        icon: 'Notifications',
    },
    {
        label: 'Tutorial',
        fontSize: 11,
        icon: 'Lightbulb',
    },
]

export interface HomeViewProps {
    title: string
}

const HomeView: FC<HomeViewProps> = ({ title }): ReactElement => {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h1">{title}</Typography>
            </Box>
            <MobileMenu options={options} />
        </>
    )
}

export default HomeView
