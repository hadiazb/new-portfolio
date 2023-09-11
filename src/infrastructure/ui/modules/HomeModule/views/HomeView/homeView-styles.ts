import tw, { styled } from 'twin.macro'

export const StyledHomeView = styled.section`
    ${tw`pt-5 min-h-[120vh]`}
    ${tw`min-h-[98vh]`}
`

export const StyledHomeImage = styled.img`
    ${tw`w-52 h-52 rounded-[50%] border-4 border-solid border-dark absolute`}
    ${tw`bottom-[-80px] left-[calc(50% - 104px)]`}
`
