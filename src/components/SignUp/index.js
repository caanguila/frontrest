import React from 'react';
import './signup.css';
import {Button, Col, Form, Row} from "react-bootstrap";

export const SignUp = () => {
    return (
        <Form>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Form.Group className="mb-3" controlId="inputUsuario">
                        <Form.Label className={"label-form"}>Usuario</Form.Label>
                        <Form.Control id={"inputUsuario"} type="text" placeholder="Usuario" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="inputNombreApellido">
                        <Form.Label className={"label-form"}>Nombre y Apellido</Form.Label>
                        <Form.Control id={"inputNombreApellido"} type="text" placeholder="Nombre y Apellido" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="inputCorreoElectronico">
                        <Form.Label className={"label-form"}>Correo electrónico</Form.Label>
                        <Form.Control id={"inputCorreoElectronico"} type="text" placeholder="Correo electrónico"
                                      required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="inputTelefono">
                        <Form.Label className={"label-form"}>Teléfono</Form.Label>
                        <Form.Control id={"inputTelefono"} type="text" placeholder="Teléfono" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="inputDireccionEnvio">
                        <Form.Label className={"label-form"}>Dirección de envió</Form.Label>
                        <Form.Control id={"inputDireccionEnvio"} type="email" placeholder="Dirección de envió"
                                      required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="inputPasword">
                        <Form.Label className={"label-form"}>Contraseña</Form.Label>
                        <Form.Control id={"inputPasword"} type="password" placeholder="Contraseña" required/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className={"mt-5"}>
                <Col className={"text-center"}>
                    <Button variant="primary" className={"btn-lg btn-block col-4 col-sm-3"} type="submit">CREAR
                        CUENTA</Button>
                </Col>
            </Row>
            <Row>
                <Col className={"text-center"}>
                    <Button variant="light" className={"btn-lg btn-block col-4 col-sm-3"}>INICIAR
                        SESIÓN</Button>
                </Col>
            </Row>
        </Form>
    );
};