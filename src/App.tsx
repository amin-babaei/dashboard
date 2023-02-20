import './App.css';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './utils/theme';

const App = () => {
 
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="h5">تست</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
