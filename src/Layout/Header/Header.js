import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className='py-3' sticky="top">
      <Container>
        <Navbar.Brand as={Link} to ={"/home"}><img src='https://codeacademy.lt/wp-content/uploads/2021/05/CodeAcademy-visi_Logotipas-juodas.png' alt='logo' className='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu">
            <Nav.Link as={Link} to ={"/home"} >Home</Nav.Link>
            <Nav.Link as={Link} to ={"/categories"} >Categories</Nav.Link>
            <Nav.Link as={Link} to ={"/blog"} >Blog</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;