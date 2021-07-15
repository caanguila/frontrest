import React from "react";
import {Navbar} from "react-bootstrap";
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