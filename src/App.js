import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import GlobalStyle from "./Global";
import Header from "./layouts/Header";
import { Button, Card } from "./elements";

const theme = {
  colors: {
    primary: "#e54b4b",
    secondary: "#dbde61"
  }
};

const themeTwo = {
  colors: {
    primary: "#524763",
    secondary: "#82d8d8"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <main
          css={`
            background: red;
            h2 {
              font-size: 100px;
            }
          `}
        >
          <Button as="a">Say Hello</Button>
          <ThemeProvider theme={themeTwo}>
            <Card>
              <h2>Card Heading</h2>
              <Card.Button modifiers="cancel">Say Hello</Card.Button>
              <Card.Button>Say Hello</Card.Button>
            </Card>
          </ThemeProvider>
          {/* <Button modifiers="cancel">Don't Say Hello</Button>
          <Button modifiers="small">Say Hello</Button>
          <Button modifiers={["cancel", "small"]}>Don't Say Hello</Button> */}
          <Header />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

// const Fake = styled.main`
//               background: red;
//             h2 {
//               font-size: 100px;
// `;
