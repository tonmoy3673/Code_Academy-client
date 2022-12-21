import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const SingleCourse = ({course}) => {
    const {_id, title, price, total_view, image_url,rating} = course;
    return (
        
           
         <div >
         <Card className='rounded text-center'>
        <Card.Img variant="top" src={image_url} className='bg-dark'/>
        <Card.Body className='bg-light'>
        <Card.Title className='text-secondary fw-semibold'> {title}</Card.Title>
        <Card.Text className='text-secondary'><p>Price : {price} <spa>$</spa></p>
            <p>Total View : {total_view}</p>
        </Card.Text>
        <Card.Text className='text-secondary fw-semibold'>Duration : {rating.duration}
        </Card.Text>
       <Link to={`/course/${_id}`}><Button variant="outline-secondary">Get Premium Pass</Button></Link>
      </Card.Body>
    </Card>
         </div>
    


        
    );
};

export default SingleCourse;