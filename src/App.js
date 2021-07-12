import React, {useState} from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ThemeAsDark, ThemeAsLight } from "./Components/UI/themes";
import { BtnTheme } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";
function App() {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme((tema) => !tema);
  }
  return (
    <>
      <ThemeProvider theme={theme ? ThemeAsDark : ThemeAsLight}>
        <GlobalStyle />
        <BtnTheme onClick={changeTheme}>
          <SwitcherTheme theme={theme} />
        </BtnTheme>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
