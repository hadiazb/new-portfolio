import { FC, ReactElement } from 'react'
import { useSelector } from 'react-redux'

// views
import { AboutMeView, BlogView, ProjectsView, TutorialView } from '..'

// interfaces
import { Option } from '@/infrastructure/ui/components/ui/MobileMenu/MobileMenu'

// styles
import { StyledWrapperView } from './wrapperView-style'

// selectors
import { homeMenuSelector } from '@/domain/store/homeUseCase'

// interfaces
import { AboutMe } from '../../interfaces'

export interface WrapperViewProps {
    options: Option[]
    aboutMe: AboutMe
}

const WrapperView: FC<WrapperViewProps> = ({ options, aboutMe }): ReactElement => {
    const { value } = useSelector(homeMenuSelector)

    const views: Record<number, JSX.Element> = {
        0: <AboutMeView aboutMe={aboutMe} />,
        1: <ProjectsView />,
        2: <BlogView />,
        3: <TutorialView />,
    }

    return (
        <>
            {options.map((option) => (
                <StyledWrapperView key={option.id}>
                    {option.id === value && views[value]}
                </StyledWrapperView>
            ))}
        </>
    )
}

export default WrapperView
