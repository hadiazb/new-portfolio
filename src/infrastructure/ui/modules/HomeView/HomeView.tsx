import { FC, ReactElement } from 'react'
import { useSelector } from 'react-redux'

// base components
import { Box, MobileMenu, Typography } from '../../components'

// selectors
import { menuMobileOptionSelector } from '@/domain/store/contentUseCase'

export interface HomeViewProps {
    title: string
}

const HomeView: FC<HomeViewProps> = ({ title }): ReactElement => {
    const options = useSelector(menuMobileOptionSelector)

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
