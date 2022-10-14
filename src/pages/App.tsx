import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from 'logo.svg';
import 'pages/App.css';
import Layout from 'components/Layout';
import NotFound from 'pages/NotFound';
import Character from 'pages/Character';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='character' element={<Character />}/>
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
