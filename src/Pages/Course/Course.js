import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Course = () => {
    const selectedCourse=useLoaderData();
    const {author, details, image_url, price, rating, title, total_view}=selectedCourse;
    return (
        <div>
            <Card className='rounded text-center'>
        <Card.Img variant="top" src={image_url} className='bg-dark'/>
        <Card.Body>
        <Card.Title className='text-secondary fw-semibold'> {title}</Card.Title>
        <Card.Text className='text-secondary fw-semibold'><p>Price : {price} <spa>$</spa></p>
            <p>Total View : {total_view}</p>
            <p>{author?.name}</p>
        </Card.Text>
        <Card.Text className='text-secondary fw-semibold'>Duration : {rating.duration}
        </Card.Text>
        <Card.Text className='text-secondary fw-semibold'>{details}
        </Card.Text>
       <Button >Download Course</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Course;