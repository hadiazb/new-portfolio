import tw, { styled } from 'twin.macro'

export const StyledSplashView = styled.section`
    ${tw`absolute top-0 left-0 right-0 bottom-0`}
    background-image: url('./assets/images/splash-mobile.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (min-width: ${({ theme }) => theme.screens.lg}) {
        background-image: url('./assets/images/splash-desk.png');
        opacity: 0.8;
    }
`
