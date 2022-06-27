import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Principal } from './Principal';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme = {theme}>
        <CssBaseline />
        <div className="App">
      <Principal />
    </div>
    </ThemeProvider>
    
  );
}

export default App;
