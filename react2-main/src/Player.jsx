// src/Player.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import pic from '../public/messi.png'

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br/>
          <strong>Nationality:</strong> {nationality}<br/>
          <strong>Jersey Number:</strong> {jerseyNumber}<br/>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown Nationality',
  jerseyNumber: 0,
  age: 0,
  imageUrl: '../public'
};

export default Player;
