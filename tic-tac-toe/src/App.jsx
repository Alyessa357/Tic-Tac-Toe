import { useContext } from 'react';
import Router from './Router.jsx';
import { GlobalStyles } from './styles/Global.styled.js';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./styles/theme.js"
import { ThemeContext } from './contexts/ThemeContext';
import { ModalContextProvider } from './contexts/ModalContext.jsx';


function App() {
  const {theme} = useContext(ThemeContext)

  const mode = (theme === "light" ? lightTheme : darkTheme)

  return (
    <ThemeProvider theme={mode}>
      <ModalContextProvider>
        <GlobalStyles />
        <Router />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
