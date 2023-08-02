import { FC, ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// base components
import { Box, MobileMenu, Typography } from '@/infrastructure/ui/components'

// selectors
import { menuMobileOptionSelector } from '@/domain/store/contentUseCase'

// actions
import { onLoadOptionMenu } from '@/domain/store/contentUseCase/homeContent/thunk'

// store
import { AppDispatch } from '../../../../../../domain/store/store'

export interface HomeViewProps {
    title: string
}

const HomeView: FC<HomeViewProps> = ({ title }): ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const options = useSelector(menuMobileOptionSelector)

    useEffect(() => {
        dispatch(onLoadOptionMenu({}))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
