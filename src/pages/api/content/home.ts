/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { NextApiRequest, NextApiResponse } from 'next'

type Option = {
    label: string
    fontSize: number
    icon: string
    id: number
}

type Data =
    | {
          message: string
      }
    | Option[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switchCaseRoute(req, res)
}

const casesMethods = (
    req: NextApiRequest,
    res: NextApiResponse<Data>,
): Record<string, () => Promise<void> | void> => ({
    GET: () => getMenuOptions(req, res),
    POST: () => getMenuOptions(req, res),
    DEFAULT: () => notFountRequest(res),
})

const switchCaseRoute = (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> | void => {
    const methodArray = Object.keys(casesMethods(req, res))
    const flat = methodArray.find((method) => method === req.method) ?? false

    if (!flat) {
        return casesMethods(req, res)['DEFAULT']()
    }

    if (req.method) {
        return casesMethods(req, res)[req.method]()
    }
}

const notFountRequest = (res: NextApiResponse<Data>): void => {
    return res.status(400).json({ message: 'Endpoint' })
}

const getMenuOptions = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const options = [
        {
            label: 'About Me',
            fontSize: 11,
            icon: 'Person2',
            id: 0,
        },
        {
            label: 'Projects',
            fontSize: 11,
            icon: 'Work',
            id: 1,
        },
        {
            label: 'Blog',
            fontSize: 11,
            icon: 'Notifications',
            id: 2,
        },
        {
            label: 'Tutorial',
            fontSize: 11,
            icon: 'Lightbulb',
            id: 3,
        },
    ]
    return res.status(200).send(options)
}
