import React from "react";
import GlobalStyle from "./Global";
import Header from "./layouts/Header";
import { Button, CancelButton } from "./elements";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Button>Hello</Button>
      <CancelButton>Don't Say Hello</CancelButton>
      <Header />
    </div>
  );
}

export default App;
