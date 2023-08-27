import { FC, ReactElement, SyntheticEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// base components
import { MobileMenu } from '@/infrastructure/ui/components'
import { WrapperView } from '..'

// selectors
import { menuMobileOptionSelector } from '@/domain/store/contentUseCase'

// actions
import { onLoadOptionMenu } from '@/domain/store/contentUseCase/homeContent/thunk'

// store
import { AppDispatch } from '../../../../../../domain/store/store'

// styles
import { StyledHomeView } from './homeView-styles'

// actions
import { homeMenuSelector, onChangeOption } from '@/domain/store/homeUseCase'

// interfaces
import { AboutMe } from '../../interfaces'

export interface HomeViewProps {
    aboutMe: AboutMe
}

const HomeView: FC<HomeViewProps> = ({ aboutMe }): ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const options = useSelector(menuMobileOptionSelector)
    const { value } = useSelector(homeMenuSelector)

    useEffect(() => {
        dispatch(onLoadOptionMenu({}))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChangeOption = (_e: SyntheticEvent<Element, Event>, newValue: number): void => {
        dispatch(onChangeOption(newValue))
    }

    return (
        <StyledHomeView>
            <WrapperView options={options} aboutMe={aboutMe} />
            <MobileMenu options={options} value={value} onChangeValue={handleChangeOption} />
        </StyledHomeView>
    )
}

export default HomeView
