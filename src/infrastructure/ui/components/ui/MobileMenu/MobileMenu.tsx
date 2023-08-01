import { FC, ReactElement, SyntheticEvent, useState } from 'react'

// styles
import { StyledMenuMobile } from './menuMobile-styles'

// base component
import { Tab, Tabs } from '../..'

// icons
import { muiIcons } from '@/infrastructure/ui/utils/icons'

export interface MobileMenuProps {
    options: Option[]
}

export interface Option {
    label: string
    fontSize: number
    icon: string
}

const MobileMenu: FC<MobileMenuProps> = ({ options }): ReactElement => {
    const [value, setValue] = useState(0)

    const handleChange = (event: SyntheticEvent, newValue: number): void => {
        setValue(newValue)
    }

    return (
        <StyledMenuMobile>
            <Tabs value={value} onChange={handleChange} centered>
                {options.map(({ label, icon, fontSize }) => (
                    <Tab key={label} icon={muiIcons[icon]} sx={{ fontSize }} label={label} />
                ))}
            </Tabs>
        </StyledMenuMobile>
    )
}

export default MobileMenu
