import { FC, ReactElement } from 'react'
import { useRouter } from 'next/router'
import { SxProps, Theme } from '@mui/material'
import { useMediaQuery } from 'usehooks-ts'

// base components
import { Box, CircularProgress, Divider, Typography } from '@/infrastructure/ui/components'

// hooks
import { useCountdownTimer } from '@/infrastructure/ui/hooks'

// styles
import { StyledSplashView } from './splashView-styles'

type BoxStyle = SxProps<Theme> | undefined

const boxStyle: BoxStyle = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

export interface SplashViewProps {
    initialSplashValue?: number
    stepLoading?: number
    splashImages: SplashImages
}

export interface SplashImages {
    desk: string
    mobile: string
}

const SplashView: FC<SplashViewProps> = ({
    initialSplashValue,
    stepLoading,
    splashImages,
}): ReactElement => {
    const router = useRouter()
    const matchMedia = useMediaQuery('(min-width: 1024px)')
    const [progress] = useCountdownTimer(initialSplashValue, stepLoading, () => {
        router.push('/home')
    })

    // handlers
    const handleSplashImgBySize = (): string =>
        !matchMedia ? `url(${splashImages.mobile})` : `url(${splashImages.desk})`

    return (
        <StyledSplashView
            style={{
                backgroundImage: handleSplashImgBySize(),
            }}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
                sx={{
                    marginTop: {
                        xs: '100px',
                        lg: 'calc(50vh - 100px)',
                    },
                }}
            >
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress
                        variant="determinate"
                        sx={{ color: 'white' }}
                        value={progress}
                        size={200}
                        thickness={!matchMedia ? 1 : 3}
                    />
                    <Box sx={boxStyle}>
                        <Typography variant="h2" color="secondary">
                            Starting...
                        </Typography>
                        <Divider />
                        <Typography variant="h4" color="white">{`${Math.round(
                            progress,
                        )}%`}</Typography>
                    </Box>
                </Box>
            </Box>
        </StyledSplashView>
    )
}

export default SplashView
