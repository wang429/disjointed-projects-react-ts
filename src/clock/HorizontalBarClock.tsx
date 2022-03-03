import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProgressBar from 'react-bootstrap/ProgressBar'

export interface TimeProps {
    time: Date,
}

export default function HorizontalBarClock(props: TimeProps) {
  let currentHours = props.time.getHours().toString();
  if (Math.ceil(Math.log10(props.time.getHours())) < 2) {
    currentHours = currentHours.padStart(2, '0');
  }
  let currentMins = props.time.getMinutes().toString();
  if (Math.ceil(Math.log10(props.time.getMinutes())) < 2) {
    currentMins = currentMins.padStart(2, '0');
  }
  let currentSecs = props.time.getSeconds().toString();
  if (Math.ceil(Math.log10(props.time.getSeconds())) < 2) {
    currentSecs = currentSecs.padStart(2, '0');
  }
  return (
    <Container>
      <Row>
        <Col xs={2}>Hours</Col>
        <Col xs={1}>{currentHours}</Col>
        <Col>
          <ProgressBar now={props.time.getHours() / 24 * 100}></ProgressBar>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>Minutes</Col>
        <Col xs={1}>{currentMins}</Col>
        <Col>
          <ProgressBar now={props.time.getMinutes() / 60 * 100}></ProgressBar>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>Seconds</Col>
        <Col xs={1}>{currentSecs}</Col>
        <Col>
          <ProgressBar now={props.time.getSeconds() / 60 * 100}></ProgressBar>
        </Col>
      </Row>
    </Container>
  );
}