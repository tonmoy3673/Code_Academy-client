import React, { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { context } from '../../Context/AuthContext/AuthContext';
import './Header.css'

const Header = () => {
  const {user}=useContext(context);
  console.log(user);
    return (
        <div className='py-4 mb-4'>
            <Navbar bg="light" expand="lg"  fixed='top'>
      <Container>
        <Navbar.Brand as={Link} to ={"/home"}><img src='https://codeacademy.lt/wp-content/uploads/2021/05/CodeAcademy-visi_Logotipas-juodas.png' alt='logo' className='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu">
            <Nav.Link as={Link} to ={"/home"} >Home</Nav.Link>
            <Nav.Link as={Link} to ={"/courses"} >Courses</Nav.Link>
            <Nav.Link as={Link} to ={"/blog"} >Blog</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {user.photoURL ?
              <Image style={{height:'30px'}} roundedCircle src={user.photoURL}></Image>
              : <FaUser></FaUser>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;