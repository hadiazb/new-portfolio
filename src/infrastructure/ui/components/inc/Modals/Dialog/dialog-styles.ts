import tw, { styled } from 'twin.macro'
import { Dialog, DialogProps } from '@mui/material'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IStyledDialog = DialogProps & any

export const StyledDialog = styled<IStyledDialog>(Dialog)`
    ${tw``}
`
