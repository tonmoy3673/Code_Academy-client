import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
const Course = () => {
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [20,12]
    };
    const selectedCourse=useLoaderData();
    const {author, details, image_url, price, rating, title, total_view}=selectedCourse;
    return (
        <div ref={ref} className='py-3'>
            <Card className='rounded text-center'>
        <Card.Img variant="top" src={image_url} className='bg-dark'/>
        <Card.Body>
        <Card.Title className='text-secondary fw-semibold'> {title}</Card.Title>
        <Card.Text className='text-secondary fw-semibold'><p>Price : {price} <spa>$</spa></p>
            <p>Total View : {total_view}</p>
            <p>Author :{author?.name}</p>
        </Card.Text>
        <Card.Text className='text-secondary fw-semibold'>Duration : {rating.duration}
        </Card.Text>
        <Card.Text className='text-secondary fw-semibold'>{details}
        </Card.Text>
        <Card.Text className='text-secondary fw-semibold'>
        <Pdf targetRef={ref} options={options} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={toPdf}><FaDownload className='white ' />Download Pdf</button>}
                        </Pdf>
        </Card.Text>
        
       <Button variant="outline-success">Download Course</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Course;