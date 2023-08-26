import { FC, ReactElement } from 'react'

// styles
import { StyledTabs, StyledTabsProps } from './tabs-styles'

const Tabs: FC<StyledTabsProps> = ({
    children,
    $indicatorPosition = 'bottom',
    ...rest
}): ReactElement => {
    return (
        <StyledTabs $indicatorPosition={$indicatorPosition} {...rest}>
            {children}
        </StyledTabs>
    )
}

export default Tabs
