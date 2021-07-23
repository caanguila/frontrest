import React from 'react';
import './menu.css';
import {AddDish} from "../Dish";
import {Row} from "react-bootstrap";

export const Menu = () => {
    return (
        <>
            <Row>
                <div className={"col-md-8 mt-3 label-bold"}>Nuestros platos</div>
            </Row>
            <AddDish/>
            <AddDish/>
            <AddDish/>
            <AddDish/>
            <AddDish/>
        </>
    );
};