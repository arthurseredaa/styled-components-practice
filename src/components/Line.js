import styled from "styled-components"

const StyledLine = styled.div`
  font-size: ${({fontSize = "40px"}) => fontSize};
  color: ${({color = "limegreen"}) => color};
`;

export const Line = (props) => {
  return <StyledLine {...props} />
}
