import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CSSReset, ColorModeProvider } from '@chakra-ui/react';
import { Router } from './app/Router';
import theme from './Assets/Theme/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Router />
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
