import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='bg-light'>
            <Header></Header>
            <Container>
            <Outlet></Outlet>
            </Container>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;