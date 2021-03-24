import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${props => props.color};
  font-size: 60px;
`;

export const Title = (props) => <StyledTitle {...props} />

