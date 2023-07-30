import tw, { styled } from 'twin.macro'
import { Modal, Box, ModalProps } from '@mui/material'

import { StyledShadowMixed } from '@/infrastructure/ui/styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IModalProps = ModalProps & any

export const StyledModal = styled<IModalProps>(Modal)`
    .MuiBackdrop-root {
        ${tw`bg-dark !opacity-50`}
    }
`

export const StyledBox = styled(Box)`
    ${StyledShadowMixed}
    ${tw`absolute top-[50%] left-[50%] p-5 bg-light  min-w-[400px] rounded`}

    transform: translate(-50%, -50%);
`
