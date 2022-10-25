import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { context } from '../../Context/AuthContext/AuthContext';

const Register = () => {
    const navigate=useNavigate();
    const {createUser}=useContext(context);
    const handleForm=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password,photoURL,name);
        createUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
          form.reset();
          navigate('/home')
        })
        .catch(error=>{
          console.error(error);
        })
       

    }

    return (
        <div className='py-4'>
            <h4 className='text-secondary text-center fw-bold py-3'>Please Fill-up Registration Form</h4>
            <Form onSubmit={handleForm} className='w-50 mx-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-secondary fw-semibold'>Your Full Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-secondary fw-semibold'>Your Photo URL</Form.Label>
        <Form.Control type="text" name='photoURL' placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-secondary fw-semibold'>Your Email Address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-secondary fw-semibold'>Your Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
       Register
      </Button>
      <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
    </Form>
        </div>
    );
};

export default Register;