import tw, { styled } from 'twin.macro'

export const StyledCardProfile = styled.section`
    ${tw`my-5 w-full`}
    ${tw`md:max-w-md`}
`

export const StyledHomeImage = styled.img`
    ${tw`w-52 h-52 rounded-[50%] border-4 border-solid border-dark absolute`}
    ${tw`bottom-[-80px] left-[calc(50% - 104px)]`}
`
