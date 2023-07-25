import tw, { styled } from 'twin.macro'
import { Modal, Box } from '@mui/material'

import { StyledShadowMixed } from '@/infrastructure/ui/styles'

export const StyledModal = styled(Modal)`
    .MuiBackdrop-root {
        opacity: 0.5 !important;
        background-color: darkgray;
    }
`

export const StyledBox = styled(Box)`
    ${StyledShadowMixed}
    ${tw`absolute top-[50%] left-[50%] p-5 bg-blend-darken  min-w-[400px] rounded`}

    transform: translate(-50%, -50%);
`
