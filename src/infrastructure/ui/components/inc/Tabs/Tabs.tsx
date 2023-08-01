import { FC, ReactElement } from 'react'
import { TabsProps as TabsPropsMUI } from '@mui/material'

// styles
import { StyledTabs } from './tabs-styles'

export type TabsProps = TabsPropsMUI

const Tabs: FC<TabsProps> = ({ children, ...rest }): ReactElement => {
    return <StyledTabs {...rest}>{children}</StyledTabs>
}

export default Tabs
