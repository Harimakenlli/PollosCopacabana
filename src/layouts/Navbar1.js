import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import Logo1 from '../assets/img/icono.png';

export default function Navbar1() {
  return (
    <>
      <Navbar className="navBg" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo1} alt="Logo" /> <em>Pollos Copacabana</em> <h1>Bienvenidos a los Pollos Copacabana</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">
                <Button style={{ backgroundColor: 'green', borderColor: 'green' }}>Inicio</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/Menu">
                <Button style={{ backgroundColor: 'green', borderColor: 'green' }}>Menu</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/Registrate">
                <Button style={{ backgroundColor: 'green', borderColor: 'green' }}>Registrate</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/Contactos">
                <Button style={{ backgroundColor: 'green', borderColor: 'green' }}>Inicia seccion</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/Acerca">
                <Button style={{ backgroundColor: 'green', borderColor: 'green' }}>Acerca</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/Compra">
                <Button style={{ backgroundColor: 'green', borderColor: 'green' }}>Compra</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </>
  );
}
