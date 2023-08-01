import { JSXElementConstructor, ReactElement } from 'react'
import * as MUIIcons from '@mui/icons-material'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IIcons = Record<string, string | ReactElement<any, string | JSXElementConstructor<any>>>

export const muiIcons: IIcons = {
    Person2: <MUIIcons.Person2 />,
    Work: <MUIIcons.Work />,
    Notifications: <MUIIcons.Notifications />,
    Lightbulb: <MUIIcons.Lightbulb />,
    Abc: <MUIIcons.Abc />,
    AbcOutlined: <MUIIcons.AbcOutlined />,
}
