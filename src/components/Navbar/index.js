import {Nav, Navbar} from "react-bootstrap";
import './navbar.css';

export const NavbarRest = () => {
    return (
        <Navbar bg="navbar" variant="dark">
            <Navbar.Brand href="#home" className={'mx-auto'}>
                <h3 className={'navbar-title'}>Delilah Restó</h3>
            </Navbar.Brand>
        </Navbar>
    );
};

export const NavbaLogInRest = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="navbar" variant="dark">
            <Navbar.Brand href="#home">
                <h3 className={'navbar-title'}>Delilah Restó</h3>
            </Navbar.Brand>
            <Navbar.Text>Jueves, 3 de Septiembre</Navbar.Text>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="me-auto">
                    <Nav.Link href="#home">PEDIDOS</Nav.Link>
                    <Nav.Link href="#features">ADMIN</Nav.Link>
                    <Nav.Link href="#pricing">HISTORIAL</Nav.Link>
                    <button className="btn btn-lg btn-light" type="button">
                        CARGAR PRODUCTO
                    </button>
                </Nav>


            </Navbar.Collapse>
        </Navbar>
    );
};