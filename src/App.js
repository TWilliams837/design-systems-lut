import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import GlobalStyle from "./Global";
import { Heading, Button, CancelButton } from "./elements";

const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a Fake Component</h2>
  </div>
);

const AppWrapper = styled.div`
  header {
    background: teal;
    ${Button} {
      margin-bottom: 2rem;
    }
    /* &:hover {
      background: red;
    } */
  }
`;

const DoubleFake = styled(Fake)`
  h2 {
    color: red;
  }
`;

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DoubleFake />
        <Fake />
        <Heading>
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
        <Button>Save</Button>
        <CancelButton top="100">Cancel</CancelButton>
        <Heading>Heading 2</Heading>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppWrapper>
  );
}

export default App;
