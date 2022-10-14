import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from 'components/Layout';
import 'pages/App.css';
import NotFound from 'pages/NotFound';
import Character from 'pages/Character';
import Home from 'pages/Home';
import Classes from 'pages/Classes';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path='dnd-manager' element={<Home />}/> */}
          <Route path='/' element={<Layout />}>
            <Route path='character' element={<Character />}/>
            <Route path='classes' element={<Classes />}/>
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
