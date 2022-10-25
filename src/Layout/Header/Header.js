import React, { useContext } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { context } from '../../Context/AuthContext/AuthContext';
import './Header.css'

const Header = () => {
  const {user,logOut}=useContext(context);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error));
  }

  console.log(user);
    return (
        <div className='py-4 mb-4'>
            <Navbar bg="light" expand="lg" className='py-3' fixed='top'>
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
            <Nav.Link href="#deets">
              {
                user?.uid ?
                <>
                
                
                <Button onClick={handleLogOut} variant="primary">Logout</Button>
                
                </>
                :
                <>
                <Link to='/login'><Button variant="outline-primary" className=' fw-semibold me-1'>Login</Button></Link>
                
                <Link to='/register'><Button variant="outline-secondary" className='fw-semibold'>Register</Button></Link>
                </>
              }
            
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {user?.photoURL ?
              <Image title={user?.displayName} style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>
             

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