import { FC, ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Theme } from '@mui/material'

// base components
import { Box, MobileMenu, Typography } from '@/infrastructure/ui/components'

// selectors
import { menuMobileOptionSelector } from '@/domain/store/contentUseCase'

// actions
import { onLoadOptionMenu } from '@/domain/store/contentUseCase/homeContent/thunk'

// store
import { AppDispatch } from '../../../../../../domain/store/store'

// styles
import { StyledHomeImage, StyledHomeView } from './homeView-styles'

export interface HomeViewProps {
    photo: string
}

const HomeView: FC<HomeViewProps> = ({ photo }): ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const options = useSelector(menuMobileOptionSelector)

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleCtrStyle = (theme: Theme) => ({
        pb: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '5px',
        boxShadow: `0px 0px 10px 1px ${theme.palette.primary.main}`,
    })

    useEffect(() => {
        dispatch(onLoadOptionMenu({}))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <StyledHomeView>
            <Box sx={handleCtrStyle}>
                <Box
                    sx={{
                        height: '340px',
                        width: '100%',
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1522770179533-24471fcdba45)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative',
                    }}
                >
                    <StyledHomeImage src={photo} alt="hello" />
                </Box>
                <Box
                    sx={{
                        height: '320px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{ fontWeight: 700, mb: '10px', fontFamily: 'Helvetica' }}
                    >
                        Hugo Andrés Díaz Bernal
                    </Typography>
                    <Typography
                        variant="h3"
                        color="primary"
                        sx={{ mb: '5px', fontStyle: 'italic', fontWeight: 600 }}
                    >
                        Software Developer
                    </Typography>
                    <Typography variant="h3" sx={{ mb: '5px' }}>
                        JavaScript Enthusiastic
                    </Typography>
                    <Typography variant="h4" sx={{ mb: '5px' }}>
                        Bogota Colombia
                    </Typography>
                </Box>
            </Box>
            <MobileMenu options={options} />
        </StyledHomeView>
    )
}

export default HomeView
