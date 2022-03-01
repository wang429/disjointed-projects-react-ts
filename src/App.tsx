import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';
import BarClock from './clock/BarClock';
import Home from './home/Home';
import Game from './TicTacToe/TicTacToe';

function App() {
  return (
    <HashRouter>
      <div>
        <Nav activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/clocks">Clocks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Game">Game</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clocks" element={<BarClock />} />
        <Route path="/games" element={<Game />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
