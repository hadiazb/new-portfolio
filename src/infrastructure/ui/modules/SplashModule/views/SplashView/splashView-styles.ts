import tw, { styled } from 'twin.macro'

export const StyledSplashView = styled('section')`
    ${tw`fixed top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center bg-dark`}

    @media (min-width: ${({ theme }) => theme.screens.lg}) {
        ${tw`opacity-80`}
    }
`
