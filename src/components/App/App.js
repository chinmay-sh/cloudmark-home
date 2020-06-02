import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import AppCard from '../AppCard/AppCard';

export default function App() {
    return(
        <Container fluid>
            <Row>
                <Col>
                    <h2>Welcome to CloudMark Home</h2>
                </Col>
            </Row>
            <br />
        <Row>

          <Col>
            <br />
            <AppCard title="Universal Converter" href="https://the-redlord.github.io/converter/#/" />
          </Col>

          <Col>
          <br/>
            <AppCard title="BMI Calculator" href="https://the-redlord.github.io/bmi_calc_react/" />
          </Col>

          <Col>
          <br/>
            <AppCard title="Crypto Ticker" href="https://the-redlord.github.io/crypto_ticker/" />
          </Col>
        </Row>
        <br/>
      </Container>
    );
  }
  