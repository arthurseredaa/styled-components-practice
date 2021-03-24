import { useState } from "react";
import styled from "styled-components"
import { Flex } from "./Flex";
import { Line } from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background-color: #222;
  color: ${({color = "limegreen"}) => color};
  resize: none;
  border: none;
  font-size: ${({fontSize = "40px"}) => fontSize};
  &:focus {
    outline: none;
  }
`;

export const Console = ({text, setText, ...props}) => {
  const [lines, setLine] = useState(["[home/user/bin]"]);

  const onKeyPress = e => {
    if(e.key === "Enter") {
      setLine([...lines, "[home/user/bin]"]);
    }
  }

  return (
    <Flex>
      <Flex direction="column" margin="0 10px">
        {lines.map(line => <Line>{line}</Line>)}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} value={text} onChange={e => setText(e.target.value)} {...props} />
    </Flex>
  )
}
