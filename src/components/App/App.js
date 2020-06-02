import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import AppCard from '../AppCard/AppCard';
import converterImg from './assets/converter.svg';
import bmiImg from './assets/bmi.svg';
import cryptoImg from './assets/crypto.svg';
import './App.css';

export default function App() {
    return(
        <Container fluid>
            <Row>
                <Col>
                    <h2 className="heading">Welcome to CloudMark Home</h2>
                </Col>
            </Row>
            <br />
        <Row>

          <Col>
            <br />
            <AppCard title="Universal Converter" href="https://the-redlord.github.io/converter/#/" img={converterImg} />
          </Col>

          <Col>
          <br/>
            <AppCard title="BMI Calculator" href="https://the-redlord.github.io/bmi_calc_react/" img={bmiImg} />
          </Col>

          <Col>
          <br/>
            <AppCard title="Crypto Ticker" href="https://the-redlord.github.io/crypto_ticker/" img={cryptoImg} />
          </Col>
        </Row>
        <br/>
      </Container>
    );
  }
  