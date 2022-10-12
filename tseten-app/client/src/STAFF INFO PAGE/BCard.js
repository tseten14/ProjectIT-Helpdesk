import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BCard(props) {
  return (
    <Card className="SAid" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.link} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary" href={props.linkedin}>LinkedIn Profile</Button>
      </Card.Body>
    </Card>
  );
}

export default BCard;