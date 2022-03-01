import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BarClock from './clock/BarClock';
import Home from './home/Home';
import Game from './TicTacToe/TicTacToe';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Nav variant="tabs" defaultActiveKey="/">
            <LinkContainer to="/">
              <Nav.Link>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/clocks">
              <Nav.Link>
                Clocks
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/games">
              <Nav.Link>
                Games
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clocks" element={<BarClock />} />
          <Route path="/games" element={<Game />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
