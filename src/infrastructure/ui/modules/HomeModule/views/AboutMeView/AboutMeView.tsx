import { FC, ReactElement } from 'react'

// base components
import { CardProfile } from '../../inc'

// styles
import { StyleAboutMeView } from './aboutMeView-style'

// interfaces
import { AboutMe } from '../../interfaces'

export interface AboutMeViewProps {
    aboutMe: AboutMe
}

const AboutMeView: FC<AboutMeViewProps> = ({ aboutMe }): ReactElement => {
    return (
        <StyleAboutMeView>
            <CardProfile
                images={aboutMe.images}
                profile={aboutMe.profile}
                socialMedia={aboutMe.socialMedia}
            />
        </StyleAboutMeView>
    )
}

export default AboutMeView
