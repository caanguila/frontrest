import React from 'react';
import './confirmation.css';
import imgSuccess from "./../../img/sample.PNG";
import {Button, Col, Form, Row} from "react-bootstrap";

export const Confirmation = () => {
    return (
        <Row>
            <Col md={{span: 6, offset: 3}} className={"text-center"}>
                <img className={"confirmationImg "} src={imgSuccess} alt={"Exito"}/>
                <div className={"font-weight-bolder"}>¡Recibimos tu pedido!</div>
                <p>Carlos, gracias por pedir a Delilah. Puedes seguir tu pedido para saber
                    dónde está.</p>
            
            </Col>
            <Row>
                <Col className={"text-center"}>
                    <Button variant="primary" className={"btn-lg btn-block col-5 col-sm-4"} type="submit">SEGUIR
                        PEDIDO</Button>
                </Col>
            </Row>
        </Row>
    );
};