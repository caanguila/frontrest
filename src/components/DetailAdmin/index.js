import React from 'react';
import './detailAdmin.css';
import {ShowDish} from "../Dish";
import {Button, Col, Row, Table} from "react-bootstrap";

export const DetailAdmin = () => {
    return (
        <>
            <Row className={"mb-4"}>
                <ShowDish/>
                <ShowDish/>
            </Row>
            <Row className={"mb-4"}>
                <label className={"label-bold mb-2"}>Total: </label>
                <b>$660</b>
            </Row>
            <Row className={"mb-3"}>
                <label className={"label-bold"}>Estado</label>
                <Col md={"8"}>
                    <Table>
                        <tr><span className="badge rounded-pill bg-danger btn-overlay ">NUEVO</span></tr>
                        <tr><span className="badge rounded-pill badge-orange btn-overlay ">CONFIRMADO</span></tr>
                        <tr><span className="badge rounded-pill bg-warning">PREPARANDO</span></tr>
                        <tr><span className="badge rounded-pill bg-success btn-overlay ">ENVIANDO</span></tr>
                        <tr><span className="badge rounded-pill bg-secondary btn-overlay ">ENTREGADO</span></tr>
                    </Table>
                </Col>
            </Row>
            <Row className={"mb-4"}>
                <Col xs={"4"} md={"4"} className={"form-group"}>
                    <label className={"label-bold mb-2"}>Forma de Pago</label>
                    <select className={"form-control"}>
                        <option>Efectivo</option>
                    </select>
                </Col>
            </Row>
            <Row className={"row mb-2"}>
                <Col xs={"12"} md={"12"} className={"form-group"}>
                    <label className={"label-bold mb-2"}>Dirección</label>
                    <p>Ejemplo de dirección ipsem laurem </p>
                </Col>
            </Row>
            <Row className={"mb-4"}>
                <label className={"label-bold"}>Usuario</label>
                <Row>
                    <Col xs={"6"} md={"7"}>
                        <b>Freddie Mercury</b>
                    </Col>
                    <Col xs={"5"} md={"5"}>
                        queen_freddie
                    </Col>
                </Row>
                <Row>
                    <Col xs={"6"} md={"7"}>
                        freddiemercury@gmail.com
                    </Col>
                    <Col xs={"6"} md={"5"}>
                        +44 7712345678
                    </Col>
                </Row>
            </Row>
            <Row className="justify-content-md-center mb-3">
                <Col xs lg="6">
                    <Button variant="primary" className={"btn-lg btn-block "} type="submit">
                        LLAMAR AL TELÉFONO
                    </Button>
                </Col>
                <Col xs lg="6">
                    <Button variant="outline-light" className={"btn-lg btn-block "}>CANCELAR
                        ORDEN</Button>
                </Col>
            </Row>
        </>
    );
};