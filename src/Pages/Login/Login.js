import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { context } from '../../Context/AuthContext/AuthContext';

const Login = () => {
    const [error,setError]=useState('');
    const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

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
          setError('');
          navigate(from, { replace: true });
        })
        .catch(error=>{
          console.error(error);
          setError(error.message);
        })
    }
    return (
        <div className='py-5'>
            <h4 className='text-secondary text-center fw-bold py-4'>Please Login With Email & Password</h4>
            <Form onSubmit={handleForm} className='w-50 mx-auto p-3 login'>
            <Form.Text >
          <h5 className="text-danger text-center mx-auto fw-bold">{error}</h5>
        </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-secondary fw-semibold'>Enter Your Email Address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        
      </Form.Group>  

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-secondary fw-semibold'>Enter Your Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" className='mb-4'>
       Login
      </Button>
      

      <p className='text-start'><small>Create a new account ? Please <Link to='/register'> Register</Link></small></p>

    </Form>
    
        </div>
    );
};

export default Login;