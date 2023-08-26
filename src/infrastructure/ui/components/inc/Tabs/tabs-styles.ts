import tw, { styled } from 'twin.macro'
import { Tabs, TabsProps } from '@mui/material'

export type StyledTabsProps = TabsProps & {
    $indicatorPosition?: 'top' | 'bottom'
}

export const StyledTabs = styled(Tabs)<StyledTabsProps>`
    .MuiTabs-indicator {
        background-color: ${(props) => props.theme.colors.primary};
        ${(props) => (props.$indicatorPosition === 'bottom' ? tw`bottom-0` : tw`top-0`)};
    }
`
