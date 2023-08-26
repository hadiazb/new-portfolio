import { FC, ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Theme } from '@mui/material'

// base components
import { Box, Divider, IconButton, MobileMenu, Typography } from '@/infrastructure/ui/components'

// selectors
import { menuMobileOptionSelector } from '@/domain/store/contentUseCase'

// actions
import { onLoadOptionMenu } from '@/domain/store/contentUseCase/homeContent/thunk'

// store
import { AppDispatch } from '../../../../../../domain/store/store'

// styles
import { StyledHomeImage, StyledHomeView } from './homeView-styles'

// icons
import { muiIcons } from '@/infrastructure/ui/utils/icons'

export interface HomeViewProps {
    images: {
        photo: string
        bgHead: string
    }
    profile: {
        name: string
        job: string
        description: string
        location: string
    }
    socialMedia: string[]
}

const HomeView: FC<HomeViewProps> = ({ images, profile, socialMedia }): ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const options = useSelector(menuMobileOptionSelector)

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleCtrStyle = (theme: Theme) => ({
        pb: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '8px',
        overflow: 'hidden',
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
                        backgroundImage: `url(${images.bgHead})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative',
                    }}
                >
                    <StyledHomeImage src={images.photo} alt="hello" />
                </Box>
                <Box
                    sx={{
                        height: '320px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{ fontWeight: 700, mb: '10px', fontFamily: 'Helvetica' }}
                    >
                        {profile.name}
                    </Typography>
                    <Typography
                        variant="h3"
                        color="primary"
                        sx={{ mb: '5px', fontStyle: 'italic', fontWeight: 600 }}
                    >
                        {profile.job}
                    </Typography>
                    <Typography variant="h3" sx={{ mb: '5px' }}>
                        {profile.description}
                    </Typography>
                    <Typography variant="h4" sx={{ mb: '5px' }}>
                        {profile.location}
                    </Typography>
                    <Divider sx={{ height: '5px' }} />
                    <Box>
                        {socialMedia.map((icon) => (
                            <IconButton key={icon} color="primary">
                                {muiIcons[icon]}
                            </IconButton>
                        ))}
                    </Box>
                </Box>
            </Box>
            <MobileMenu options={options} />
        </StyledHomeView>
    )
}

export default HomeView
