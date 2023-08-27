import { FC, ReactElement } from 'react'

// interfaces
import { Projects } from '../../interfaces'

// styles
import { StyledProjectsView } from './projectsView-style'

export interface ProjectsViewProps {
    projects?: Projects
}

const ProjectsView: FC<ProjectsViewProps> = (): ReactElement => {
    return <StyledProjectsView>ProjectsView</StyledProjectsView>
}

export default ProjectsView
