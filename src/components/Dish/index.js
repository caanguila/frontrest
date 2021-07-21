import React from "react";
import './dish.css';
import bagel from "./../../img/bagel.PNG";
import {Col, Row} from "react-bootstrap";


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
                <button type="button" className="btn btn-primary btn-circle btn-lg">
                    <i className="bi bi-plus-lg"/>
                </button>
            </Col>
        </Row>
    );
};

export const OrderDish = () => {
    return (
        <div className={"row mt-2 mb-2"}>
            <div className={"col-md-1 col-sm-1 col-3"}><img src={bagel} alt={"dish"}/></div>
            <div className={"col-md-9 col-sm-8 mt-2 col-7"}>
                <div className={"row"}>
                    Bagel de Salmon
                </div>
                <div className={"row"}>
                    $425
                </div>
            </div>
            <div className={"col align-self-end mt-3 "}>
                <button type="button" className="btn btn-outline-info btn-circle btn-lg">
                    <i className="bi bi-x-lg"/>
                </button>
            </div>
        </div>
    );
};

export const ShowDish = () => {
    return (
        <div className={"row mt-2 mb-2"}>
            <div className={"col-lg-1 col-md-2 col-sm-2 col-3"}><img src={bagel} alt={"dish"}/></div>
            <div className={"col-md-9 col-sm-8 mt-2 col-7"}>
                <div className={"row"}>
                    Bagel de Salmon
                </div>
                <div className={"row"}>
                    $425
                </div>
            </div>
        </div>
    );
};