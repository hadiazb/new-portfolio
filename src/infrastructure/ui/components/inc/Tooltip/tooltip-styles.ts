import tw, { styled } from 'twin.macro'
import { Tooltip, TooltipProps } from '@mui/material'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IStyledTooltip = TooltipProps & any

export const StyledTooltip = styled<IStyledTooltip>(Tooltip)`
    ${tw`text-2xl`}
`
