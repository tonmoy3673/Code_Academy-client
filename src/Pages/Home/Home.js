import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import Lottie from 'lottie-react';
import lottie from '../Lottie/lottie.json';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle ,FaGithub,FaMailBulk} from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import { context } from '../../Context/AuthContext/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';





const Home = () => {

  const {logInWithGoogle,signInWithGithub}=useContext(context);
  const googleProvider=new GoogleAuthProvider();
  const handleGoogleSignIn =()=>{
    logInWithGoogle(googleProvider)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=>console.error(error))
  }
    const githubProvider=new GithubAuthProvider();
    const handleGithub=()=>{
      signInWithGithub(githubProvider)
      .then(result=>{
        const user=result.user;
        console.log(user);
      })
      .catch(error=>{
        console.error(error);
        
      })
        
       }
  
    


    return (
        <div className='py-3'>
           <Container>
            <Row xs={1} md={2} className='justify-space-center align-item-center text-center py-3'>
            
            <Col className='text-start pb-2' lg='6'>
            <Lottie animationData={lottie} loop={true}></Lottie>
            
            
            
        </Col>
        <Col lg='6'>
     
        <div className='login'>
        <ButtonGroup vertical className='text-end py-4'>
        <Link to='/login'><Button className='mb-3'variant="outline-success"><FaMailBulk/>  Login with Email & Password</Button></Link>
        <Button onClick={handleGoogleSignIn} className='mb-3' variant="outline-primary"><FaGoogle/> Login with Google</Button>
        <Button onClick={handleGithub} variant="outline-dark"><FaGithub/> Login with GitHub</Button>
      </ButtonGroup>
        </div>
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
          src='https://miro.medium.com/max/1400/0*GKIyAWHbKbANm7d9.png'
          alt="First slide"
        />
        <Carousel.Caption>
        
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn1.epicgames.com/ue/product/Screenshot/Slide1.PNG-1920x1080-160df0b6db5b5e9131397f6dbe8289d2.jpg?resize=1&w=1920"
          alt="First slide" />

        <Carousel.Caption>
        
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--3zWuwYa3--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        
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