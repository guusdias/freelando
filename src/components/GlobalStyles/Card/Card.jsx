import styled from "@emotion/styled"

const StyeldDiv = styled.div`
  padding: 32px;
  background: ${props => props.theme.colors.secondary.a};
  border: 1px solid;
  border-color: ${props => props.theme.colors.primary.a};
  border-radius: 16px;
`

export const Card = ({children})=>{
  return(
    <StyeldDiv>
      {children}
    </StyeldDiv>
  )
}