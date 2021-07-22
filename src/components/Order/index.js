import React from 'react';
import './order.css';
import {OrderDish} from "../Dish";
import {Button, Col, Row} from "react-bootstrap";

export const Order = () => {
    return (
        <>
            <Row>
                <label className={"col-md-8 mt-3 font-weight-bold"}>Detalle</label>
            </Row>
            <Row className={"mb-4"}>
                <OrderDish/>
                <OrderDish/>
            </Row>
            <Row className={"mb-4"}>
                <Col md={"8"}>
                    Total: <b>$660</b>
                </Col>
            </Row>
            <Row className={"mb-5"}>
                <Col md={"2"} xs={"4"} className={"form-group"}>
                    <label className={"font-weight-bold mb-2"}>Forma de Pago</label>
                    <select className={"form-control"}>
                        <option>Efectivo</option>
                    </select>
                </Col>
            </Row>
            <Row className={"mb-3"}>
                <Col xs={"8"} md={"8"} className={"form-group"}>
                    <label className={"font-weight-bold mb-2"}>Dirección</label>
                    <p>Ejemplo de dirección ipsem laurem </p>
                </Col>
            </Row>
            <Row>
                <Col className={"text-center"}>
                    <Button variant="primary" className={"btn-lg btn-block col-5 col-sm-4"} type="submit">CONFIRMAR
                        PEDIDO</Button>
                </Col>
            </Row>
        </>
    );
};