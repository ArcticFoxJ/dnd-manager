import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from 'components/Layout';
import 'pages/App.css';
import NotFound from 'pages/NotFound';
import Character from 'pages/Character';
import Classes from 'pages/Classes';
import Equipment from 'pages/Equipment';
import MagicItems from 'pages/MagicItems';
import Monsters from 'pages/Monsters';
import { useState } from 'react';

function App() {

  const [title, setTitle] = useState('')

  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path='dnd-manager' element={<Home />}/> */}
          <Route path='/' element={<Layout title={title}/>}>
            <Route path='character' element={<Character setTitle={setTitle} />}/>
            <Route path='classes' element={<Classes setTitle={setTitle} />}/>
            <Route path='equipment' element={<Equipment setTitle={setTitle} />}/>
            <Route path='magic-items' element={<MagicItems setTitle={setTitle} />}/>
            <Route path='monsters' element={<Monsters setTitle={setTitle} />}/>
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
