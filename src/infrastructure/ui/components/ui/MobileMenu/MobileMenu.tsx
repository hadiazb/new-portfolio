import { FC, ReactElement, SyntheticEvent } from 'react'

// styles
import { StyledMenuMobile } from './menuMobile-styles'

// base component
import { Tab, Tabs } from '../..'

// icons
import { muiIcons } from '@/infrastructure/ui/utils/icons'

export interface MobileMenuProps {
    options: Option[]
    value: number
    onChangeValue: (_e: SyntheticEvent, newValue: number) => void
}

export interface Option {
    label: string
    fontSize: number
    icon: string
    id: number
}

const MobileMenu: FC<MobileMenuProps> = ({ options, value, onChangeValue }): ReactElement => {
    return (
        <StyledMenuMobile>
            <Tabs value={value} onChange={onChangeValue} centered $indicatorPosition="top">
                {options.map(({ label, icon, fontSize, id }) => (
                    <Tab key={id} icon={muiIcons[icon]} sx={{ fontSize }} label={label} />
                ))}
            </Tabs>
        </StyledMenuMobile>
    )
}

export default MobileMenu
