import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import './Footer.css'

const Footer = () => {
    return (
        <div className='container-fluid bg-dark text-center' fixed='bottom'>
            <Row className='pt-3'>
                
                <Col lg='4' className='text-white'>
                <h5 className='text-light'> Code Academy</h5>
                <p>We have compiled 750+ hours
                   of Learning <br/>resources
                    including free certificates</p>
                </Col>
                <Col lg='4' className='text-white'>
                <h5 className='text-light'> Quick Links</h5>
                
                    
                    <Nav.Link className='text-decoration-none' as={Link} to ="/home" >Home</Nav.Link>
                    <Nav.Link className='text-decoration-none' as={Link} to ="/courses" >Courses</Nav.Link>
                    <Nav.Link className='text-decoration-none' as={Link} to ="/blog" >Blog</Nav.Link>
                                       
                    
                
                </Col>
                <Col lg='4'>
                <h5 className='text-light'>Contact Us</h5>
                <p className='text-white'>Office 41, Zawaya Buildin,<br/>
                  Ghala Muscat,<br/>
                  Sultanate of Oman<br/>
                  Privacy Ploicy | Terms of use

                
                </p>
                </Col>
                
            </Row>
        </div>
    );
};

export default Footer;