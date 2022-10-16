import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'pages/App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: blueGrey[800],
      contrastText: '#FFFFFF'
    },
    info: {
      main: blueGrey[600]
    },
    text: {
      primary: '#000000',
    }
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
