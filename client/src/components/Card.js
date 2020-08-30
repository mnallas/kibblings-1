import React from "react";
import { Card, Button } from "react-bootstrap";

export const Cards = (props) => {
  return (
    <Card style={{ width: props.width }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.petName}</Card.Title>
        <Card.Text>{props.petBreed}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export const PetCard = (props) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={props.image}
            className="card-img rounded-circle"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{props.petName}</h3>
            <h5 className="card-text">{props.petBreed}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InfoCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.petName}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Breed: {props.breed}</ListGroupItem>
        <ListGroupItem>Age: {props.age}</ListGroupItem>
        <ListGroupItem>Weight: {props.weight}</ListGroupItem>
        <ListGroupItem>Gender: {props.gender}</ListGroupItem>
        <ListGroupItem>Color: {props.color}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Edit </Button>
        <Button variant="danger">Remove </Button>
      </Card.Body>
    </Card>
  );
};
