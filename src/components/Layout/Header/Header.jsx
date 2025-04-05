import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="p-4">
            <Navbar.Brand href="/">AI Info</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav"/>
            <Navbar.Collapse id="navbar-nav">
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
