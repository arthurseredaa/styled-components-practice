import { useState } from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { Console } from "./components/Console";
import { Flex } from "./components/Flex";
import { Title } from "./components/Title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #222;
  padding: 2rem;
`;

function App() {
  const [text, setText] = useState("");

  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color="limegreen">Console.web()</Title>
      </Flex>
      <Flex direction="column" margin="10px 0">
        <Console text={text} setText={setText} />
        <Button text={text} largeButton outlined color="limegreen" align="flex-end">Alert</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
