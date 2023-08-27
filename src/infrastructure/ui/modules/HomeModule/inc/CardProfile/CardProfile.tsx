import { FC, ReactElement } from 'react'

import { Box, Divider, IconButton, Typography } from '@/infrastructure/ui/components'

import { StyledCardProfile, StyledHomeImage } from './cardProfile-styles'

import { muiIcons } from '@/infrastructure/ui/utils/icons'

export interface CardProfileProps {
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

const CardProfile: FC<CardProfileProps> = ({ images, profile, socialMedia }): ReactElement => {
    return (
        <StyledCardProfile>
            <Box
                sx={(theme) => ({
                    pb: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: `0px 0px 10px 1px ${theme.palette.primary.main}`,
                })}
            >
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
        </StyledCardProfile>
    )
}

export default CardProfile
