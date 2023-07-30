import tw, { styled } from 'twin.macro'
import { Popover, PopoverProps } from '@mui/material'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IStyledPopover = PopoverProps & any

export const StyledPopover = styled<IStyledPopover>(Popover)`
    ${tw``}
`
