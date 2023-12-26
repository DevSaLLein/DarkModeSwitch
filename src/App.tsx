import Header from "./components/Header";
import GlobalStyle from './styles/global';
import usePersistedState from "./utils/usePersistedState";

import { ThemeProvider, DefaultTheme } from "styled-components";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme}/>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}

export default App
