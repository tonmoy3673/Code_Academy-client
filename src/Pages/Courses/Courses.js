import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import SideNav from './SideNav/SideNav';


const Courses = () => {

    const courses=useLoaderData();
    
    return (
        <div className='py-5'>
           
           <Container>

           <Row className="g-4">

           <Col lg='3' >
           <h5 className='text-secondary fw-bolder text-start py-3'>Our Courses Name </h5>
                    <SideNav></SideNav>
                </Col>

           <Col  lg='9'>

           <Row xs={1} md={2} className="g-4">
            {
                courses.map((course)=>(<SingleCourse key={course?._id} course={course}></SingleCourse>))};
                </Row>
                </Col>
               
            </Row>
           </Container>
        </div>
    );
};

export default Courses;