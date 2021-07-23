import React from 'react';
import './login.css';
import {Col, Row, Form, Button} from "react-bootstrap";

export const Login = () => {
    return (
        <div className="login">
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Form.Group className="mb-3" controlId="inputEmail">
                        <Form.Label className={"label-form"}>Usuario o correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo Electrónico" required/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Form.Group className="mb-3" controlId="inputPassword">
                        <Form.Label className={"label-form"}>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" required/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className={"mt-5"}>
                <Col className={"text-center"}>
                    <Button variant="primary" className={"btn-lg btn-block col-4 col-sm-3"} type="submit">INICIAR
                        SESIÓN</Button>
                </Col>
            </Row>
            <Row>
                <Col className={"text-center"}>
                    <Button variant="light" className={"btn-lg btn-block col-4 col-sm-3"}>REGISTRARSE</Button>
                </Col>
            </Row>
        </div>
    );
};