import React from 'react';
import './menu.css';
import {AddDish} from "../Dish";
import {Card, Row} from "react-bootstrap";

export const Menu = () => {
    return (
        <>
            <Row>
                <div className={"col-md-8 mt-3 label-bold"}>Tus favoritos</div>
            </Row>
            <Row>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="https://via.placeholder.com/286x160.png"/>
                    <Card.Body>
                        <Card.Title>Veggie Avocado</Card.Title>
                        <Card.Text>
                            $310
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="https://via.placeholder.com/286x160.png"/>
                    <Card.Body>
                        <Card.Title>Veggie Avocado</Card.Title>
                        <Card.Text>
                            $310
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="https://via.placeholder.com/286x160.png"/>
                    <Card.Body>
                        <Card.Title>Veggie Avocado</Card.Title>
                        <Card.Text>
                            $310
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
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