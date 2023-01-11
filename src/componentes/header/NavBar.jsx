import React from "react";
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';






function NavBar() {

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <NavLink to="/"className="enlacesInicio">El cotillon de nancy</NavLink> 
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className="enlaces" to="/productos">Productos</NavLink>
              <NavLink className="enlaces" to="/nosotros">Nosotros</NavLink>
              <NavLink className="enlaces" to="/register">Login/Register</NavLink>
              <CartWidget/>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;
