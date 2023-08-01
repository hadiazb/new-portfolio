import { FC, ReactElement } from 'react'
import { TabProps as TabPropsMUI } from '@mui/material'

// styles
import { StyledTab } from './tab-styles'

export type TabProps = TabPropsMUI

const Tab: FC<TabProps> = ({ children, ...rest }): ReactElement => {
    return <StyledTab {...rest}>{children}</StyledTab>
}

export default Tab
