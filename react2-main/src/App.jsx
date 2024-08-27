// src/App.jsx
import React from 'react';
import PlayersList from './PlayersList';
import { Navbar, Container } from 'react-bootstrap';
import './App.css'; // Import the custom CSS

const App = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">FIFA Player Cards</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <PlayersList />
      </Container>
      <footer>
        © 2024 FIFA Player Cards
      </footer>
    </div>
  );
};

export default App;
