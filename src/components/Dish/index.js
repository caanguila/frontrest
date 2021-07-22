import React from "react";
import './dish.css';
import bagel from "./../../img/bagel.PNG";
import {Button, Col, Row} from "react-bootstrap";


export const AddDish = () => {
    return (
        <Row className={"mt-2 mb-2"}>
            <Col md={"auto"} xs={"auto"}>
                <img src={bagel} alt={"dish"}/>
            </Col>
            <Col>
                <Row>
                    Bagel de Salmon
                </Row>
                <Row>
                    $425
                </Row>
            </Col>
            <Col className={"mt-3 "} xs lg="2">
                <Button variant="primary" className={"btn-circle btn-lg"}>
                    <i className="bi bi-plus-lg"/>
                </Button>
            </Col>
        </Row>
    );
};

export const OrderDish = () => {
    return (
        <Row className={"mt-2 mb-2"}>
            <Col md={"auto"} xs={"auto"}>
                <img src={bagel} alt={"dish"}/>
            </Col>
            <Col>
                <Row>
                    Bagel de Salmon
                </Row>
                <Row>
                    $425
                </Row>
            </Col>
            <Col className={"mt-3 "} xs lg="2">
                <Button variant="outline-info" className={"btn-circle btn-lg"}>
                    <i className="bi bi-x-lg"/>
                </Button>
            </Col>
        </Row>
    )
        ;
};

export const ShowDish = () => {
    return (
        <Row className={"mt-2 mb-2"}>
            <Col md={"auto"} xs={"auto"}>
                <img src={bagel} alt={"dish"}/>
            </Col>
            <Col>
                <Row>
                    Bagel de Salmon
                </Row>
                <Row>
                    $425
                </Row>
            </Col>
        </Row>
    );
};