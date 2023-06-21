import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CSSReset, ColorModeProvider, theme } from '@chakra-ui/react';
import { Router } from './app/Router';

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
