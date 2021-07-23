import React, {useState} from 'react';
import './admin.css';
import {Row, Table, Offcanvas} from "react-bootstrap";
import {DetailAdmin} from "../DetailAdmin";

export const Admin = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Row className={"mt-2"}>
            <Table responsive striped hover>
                <thead>
                <tr className={"label-bold"}>
                    <th scope="col">ESTADO</th>
                    <th scope="col">HORA</th>
                    <th scope="col">NÚMERO</th>
                    <th scope="col">DESCRIPCIÓN</th>
                    <th scope="col">PAGO</th>
                    <th scope="col">USUARIO</th>
                    <th scope="col">DIRECCIÓN</th>
                </tr>
                </thead>
                <tbody>
                <tr onClick={handleShow}>
                    <th scope="row"><span className="badge rounded-pill bg-danger">NUEVO</span></th>
                    <td>12:30PM</td>
                    <td>#7</td>
                    <td>1X HamClas 1xSandVegg</td>
                    <td><i className="bi bi-cash"/> $660</td>
                    <td>Otto</td>
                    <td>Calle falsa 123</td>
                </tr>
                <tr>
                    <th scope="row"><span className="badge rounded-pill bg-warning">PREPARANDO</span></th>
                    <td>12:30PM</td>
                    <td>#77</td>
                    <td>1X HamClas 1xSandVegg</td>
                    <td><i className="bi bi-credit-card"/> $660</td>
                    <td>Thornton</td>
                    <td>Calle falsa 123</td>
                </tr>
                <tr>
                    <th scope="row"><span className="badge rounded-pill bg-success">ENVIANDO</span></th>
                    <td>12:30PM</td>
                    <td>#5</td>
                    <td>1X HamClas 1xSandVegg</td>
                    <td><i className="bi bi-credit-card"/> $660</td>
                    <td>the Bird</td>
                    <td>Calle falsa 123</td>
                </tr>
                <tr>
                    <th scope="row"><span className="badge rounded-pill bg-secondary">ENTREGADO</span></th>
                    <td>12:30PM</td>
                    <td>#7</td>
                    <td>1X HamClas 1xSandVegg</td>
                    <td><i className="bi bi-credit-card"/> $660</td>
                    <td>the Bird</td>
                    <td>Calle falsa 123</td>
                </tr>
                <tr>
                    <th scope="row"><span className="badge rounded-pill badge-orange">CONFIRMADO</span></th>
                    <td>12:30PM</td>
                    <td>#7</td>
                    <td>1X HamClas 1xSandVegg</td>
                    <td><i className="bi bi-credit-card"/> $660</td>
                    <td>the Bird</td>
                    <td>Calle falsa 123</td>
                </tr>
                <tr>
                    <th scope="row"><span className="badge rounded-pill badge-purple">CANCELADO</span></th>
                    <td>12:30PM</td>
                    <td>#7</td>
                    <td>1X HamClas 1xSandVegg</td>
                    <td><i className="bi bi-credit-card"/> $660</td>
                    <td>the Bird</td>
                    <td>Calle falsa 123</td>
                </tr>
                </tbody>
            </Table>

            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <label className={"label-bold"}>Detalle</label></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <DetailAdmin/>
                </Offcanvas.Body>
            </Offcanvas>
        </Row>
    );
};