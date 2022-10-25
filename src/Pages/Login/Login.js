import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { context } from '../../Context/AuthContext/AuthContext';

const Login = () => {

    const navigate=useNavigate();
  const {signIn}=useContext(context);
    const handleForm=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
          const user=result.user;
          console.log('sign in', user)
          form.reset();
          navigate('/home')
        })
        .catch(error=>{
          console.error(error);
        })
    }
    return (
        <div className='py-5'>
            <Form onSubmit={handleForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        
      </Form.Group>  

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className='mb-3'>
       Login
      </Button>
      <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
    </Form>
        </div>
    );
};

export default Login;