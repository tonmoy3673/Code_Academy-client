import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const SingleCourse = ({course}) => {
    const { _id, title, price, total_view, image_url,rating} = course;
    return (
        <div>
           
           <Card className='rounded text-center'>
        <Card.Img variant="top" src={image_url} className='bg-dark'/>
        <Card.Body>
        <Card.Title className='text-secondary fw-semibold'> {title}</Card.Title>
        <Card.Text className='text-secondary fw-semibold'><p>Price : {price} <spa>$</spa></p>
            <p>Total View : {total_view}</p>
        </Card.Text>
        <Card.Text className='text-secondary fw-semibold'>Duration : {rating.duration}
        </Card.Text>
       <Button >Get Premium Pass</Button>
      </Card.Body>
    </Card>
    


        </div>
    );
};

export default SingleCourse;