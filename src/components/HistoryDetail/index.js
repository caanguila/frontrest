import React from 'react';
import {ShowDish} from "../Dish";
import {Col, Row} from "react-bootstrap";

export const HistoryDetail = () => {
    return (
        <>
            <Row>
                <label className={"col-md-8 mt-3 label-bold"}>Estado</label>
            </Row>
            <Row>
                <label className={"col-md-8 mt-3 label-bold"}>Detalle</label>
            </Row>
            <Row className={"mb-4"}>
                <ShowDish/>
                <ShowDish/>
            </Row>
            <Row className={"mb-4"}>
                <Col md={"8"}>
                    <label className={"label-bold mb-2"}>Total: </label>
                    <b>$660</b>
                </Col>
            </Row>
            <Row className={"mb-5"}>
                <Col md={"2"} xs={"4"} className={"form-group"}>
                    <label className={"label-bold mb-2"}>Forma de Pago</label>
                    <select className={"form-control"}>
                        <option>Efectivo</option>
                    </select>
                </Col>
            </Row>
        </>
    );
};