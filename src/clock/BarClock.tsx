import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProgressBar from 'react-bootstrap/ProgressBar'

export interface TimeProps {
    time: Date,
}

function BarClock(props: TimeProps) {
  let currentHours = props.time.getHours();
  let currentMins = props.time.getMinutes();
  let currentSecs = props.time.getSeconds();
  return (
    <Container>
      <Row>
        <Col xs={1}>{currentHours}</Col>
        <Col>
          <ProgressBar now={currentHours / 24 * 100} label={currentHours}></ProgressBar>
        </Col>
      </Row>
      <Row>
        <Col xs={1}>{currentMins}</Col>
        <Col>
          <ProgressBar now={currentMins / 60 * 100} label={currentMins}></ProgressBar>
        </Col>
      </Row>
      <Row>
        <Col xs={1}>{currentSecs}</Col>
        <Col>
          <ProgressBar now={currentSecs / 60 * 100} label={currentSecs}></ProgressBar>
        </Col>
      </Row>
    </Container>
  );
}

export default BarClock;