import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

import HorizontalBarClock from './HorizontalBarClock'
import VerticalBarClock from './VerticalBarClock'

interface ClocksProps {
}

interface ClocksState {
  time: Date;
}

export default class Clocks extends React.Component<ClocksProps, ClocksState> {
  interval?: NodeJS.Timeout;

  constructor(props: any) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  render(): React.ReactNode {
    return (
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Header as="h5">ISO String</Card.Header>
            <Card.Body>{this.state.time.toISOString()}</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header as="h5">Bar Clock</Card.Header>
            <Card.Body>
              <HorizontalBarClock time={this.state.time} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header as="h5">Bar Clock</Card.Header>
            <Card.Body>
              <VerticalBarClock time={this.state.time} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.tick(),
      1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}