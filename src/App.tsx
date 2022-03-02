import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Clocks from './clock/Clocks';
import Home from './home/Home';
import Game from './TicTacToe/TicTacToe';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <HashRouter>
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
          <Route path="/clocks" element={<Clocks />} />
          <Route path="/games" element={<Game />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
