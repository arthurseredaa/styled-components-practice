import styled from "styled-components"

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({justify = "stretch"}) => justify};
  align-items: ${({align = "stretch"}) => align};
  flex-direction: ${({direction = "row"}) => direction};
  margin: ${({margin = "0"}) => margin};
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />
}
