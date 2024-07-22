import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import './style.css';

const LinkStyle = {
  textDecoration: "none",
}

export default function Card(props) {
  return (
    <Link to={`/card/${props.id}`} style={LinkStyle}>
      <div className="card">
        <div className="card-header">
        <Row>
            <Col xs={6} className="d-flex justify-content-start">
              <h1>#{props.id}</h1>
            </Col>
            <Col xs={6} className="d-flex justify-content-end">
              <h6>HP {props.hp}</h6>
            </Col>
          </Row>
        </div>
        <div className="card-body">
          <img src={props.image} alt={props.name} />
          <h5 className="card-title">{props.name}</h5>
        </div>
        <div className="card-footer">
          <ul className="stats-list">
            <li>
              <p>{props.attack}</p>
              <span>Attack</span>
            </li>
            <li>
              <p>{props.defense}</p>
              <span>Defense</span>
            </li>
            <li>
              <p>{props.speed}</p>
              <span>Speed</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
