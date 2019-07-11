import React from "react";
import GlobalStyle from "./Global";
import Header from "./layouts/Header";
import { Button } from "./elements";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Button>Hello</Button>
      <Button modifiers="cancel">Hello</Button>
      <Button modifiers="cancel">Don't Say Hello</Button>
      <Button modifiers="small">Hello</Button>
      <Button modifiers={["cancel", "small"]}>Don't Say Hello</Button>
      <Header />
    </div>
  );
}

export default App;
