import { FC, ReactElement } from 'react'

// interfaces
import { Blog } from '../../interfaces'

// styles
import { StyledBlogView } from './blogView-style'

export interface BlogViewProps {
    blog?: Blog
}

const BlogView: FC<BlogViewProps> = (): ReactElement => {
    return <StyledBlogView>BlogView</StyledBlogView>
}

export default BlogView
