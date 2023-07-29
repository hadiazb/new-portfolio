import Head from 'next/head'

import { ThemeProvider } from 'styled-components/macro'
import { ThemeProvider as ThemeProviderMUI } from '@mui/material/styles'

// base components
import { DefaultCtr } from '../../inc'

// styles
import { StyledMainLayout } from './mainLayout-styles'
import { Theme, themeMUI, GlobalStyle } from '../../../styles'

export type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const theme = Theme()

    return (
        <>
            <Head>
                <title>Hugo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <ThemeProviderMUI theme={themeMUI}>
                    <GlobalStyle reset />
                    <StyledMainLayout>
                        <DefaultCtr>{children}</DefaultCtr>
                    </StyledMainLayout>
                </ThemeProviderMUI>
            </ThemeProvider>
        </>
    )
}

export default MainLayout
