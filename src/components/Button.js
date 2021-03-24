import styled, { css, keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(-10deg);

  }
  50% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(10deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`;

const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  background-color: #616161;
  color: #fff;
  transition: 0.1s all linear;
  align-self: ${({ align = "stretch" }) => align};
  &:hover {
    background-color: #424242;
    animation: ${rotateAnimation} 0.3s linear;
  }
  &:focus {
    outline: none;
  }
  ${({ primary }) =>
    primary &&
    css`
      background-color: #01579b;
      &:hover {
        background-color: #002f6c;
      }
    `};
  ${({ outlined }) =>
    outlined &&
    css`
      background: none;
      border: 1px solid ${({ color = "#01579b" }) => color};
      color: ${({ color = "#01579b" }) => color};
      &:hover {
        background-color: ${({ bgColor = "rgba(255,255,255,.1)" }) => bgColor};
      }
    `}
`;

const LargeButton = styled(StyledButton)`
  font-size: 34px;
`;

export const Button = (props) =>
  props.largeButton ? (
    <LargeButton onClick={() => alert(props.text)} {...props} />
  ) : (
    <StyledButton onClick={() => alert(props.text)} {...props} />
  );
