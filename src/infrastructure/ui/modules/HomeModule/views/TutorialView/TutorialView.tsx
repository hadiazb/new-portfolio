import { FC, ReactElement } from 'react'

// interfaces
import { Tutorial } from '../../interfaces'

// styles
import { StyledTutorialView } from './tutorialView-styles'

export interface TutorialViewProps {
    tutorial?: Tutorial
}

const TutorialView: FC<TutorialViewProps> = (): ReactElement => {
    return <StyledTutorialView>TutorialView</StyledTutorialView>
}

export default TutorialView
