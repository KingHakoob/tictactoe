import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChooseGameMode } from './components/choosegamemode/choosegamemodecomponent';
import { Game } from './components/game/gamecomponent';
import { CoolGame } from './components/coolgame/coolgamecomponent';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<ChooseGameMode />} />
        <Route path='Game' element={<Game />} />
        <Route path='CoolGame' element={<CoolGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
