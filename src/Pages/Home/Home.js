import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import Lottie from 'lottie-react';
import lottie from '../Lottie/lottie.json';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle ,FaGithub} from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';





const Home = () => {
    return (
        <div className='py-3'>
           <Container>
            <Row xs={1} md={2} className='justify-space-center align-item-center text-center'>
            
            <Col className='text-start pb-2' lg='6'>
            <Lottie animationData={lottie} loop={true}></Lottie>
            
            
            
        </Col>
        <Col lg='6'>
     
        <ButtonGroup vertical className='text-end py-4'>
        <Button className='mb-3' variant="outline-primary"><FaGoogle/>    Login with Email & Password</Button>
        <Button className='mb-3' variant="outline-primary"><FaGoogle/> Login with Google</Button>
        <Button variant="outline-dark"><FaGithub/> Login with GitHub</Button>
      </ButtonGroup>
      <h5 className='text-secondary fw-semibold mt-4 text-start '><span className='fw-bold text-dark'>Code Academy</span> is a simple, yet effective way to check learners knowledge and an open up opportunities for student collaboration.Programming is a critical skill in today's economy, and there is a shortage of qualified developers. Whether you are new to coding, adding more skills, or advancing your career, 10 hours a week will prepare you for your ideal developer job.</h5>
      
        </Col>
            </Row>
            
    <Row className='py-3'>
        <Col lg='7'>
            <h3 className='fw-bold'>What you will learn ?</h3>
            <h5 className='text-secondary fw-semibold'>Front End Web Developer</h5>
            <p>The goal of the Front End Web Developer Nanodegree program is to equip learners with the unique skills they need to build and develop a variety of websites and applications. Graduates of this Nanodegree program will be able to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript. Students will also build competency automating application build and deployment using Webpack and improving offline performance of websites using Service Worker.</p>
        </Col>
        <Col lg='5'>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt="First slide"
        />
        <Carousel.Caption>
        <h4>HTML</h4>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide" />

        <Carousel.Caption>
        <h4>CSS</h4>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        <h4>JavaScript</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
    </Row>
           </Container>
        </div>
    );
};

export default Home;