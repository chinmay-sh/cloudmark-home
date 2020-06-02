import React from 'react';
import {Card,Button} from 'react-bootstrap';

export default function AppCard(props){

    return(
        <Card bg="dark" style={{ width: '18rem',borderRadius:"20px",margin:"auto" }}>
                <Card.Img variant="top" src={weightImg} style={{width:"70%",margin:"auto"}} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>  
                    <Button variant="info" href={props.href} activeClassName="active" to="/mass">RUN</Button>
                </Card.Body>
        </Card>
    );
}