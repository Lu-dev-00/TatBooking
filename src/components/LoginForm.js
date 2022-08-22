import React, { Component, useRef, useState } from 'react'
import {Form, Button, Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContect';
export default function LoginForm () {
  const {login} = useAuth()
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    await login(emailRef.current.value, passwordRef.current.value).then((userCredential) => {
      console.log(userCredential);
      navigate("/dashboard", { replace: true });
  })
  .catch((error) => {
      setError(JSON.stringify(error.message))
  });

  }
    return (
        <>
        <div>
            <Form className='text-black p-5 '>
            <h1 class="display-3 mb-4">Login</h1>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form.Group className="mb-4 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  className='border border-dark' ref={emailRef}/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  className='border border-dark' ref={passwordRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Rememer Me" />
            </Form.Group>
            <Button variant="outline-dark d-block mx-auto mt-3 w-100" type="submit"  disabled={loading} onClick={handleSubmit}>
                Submit
            </Button>
            <Form.Label>Don't have an account? <Link to="/signup" className="text-black"> Sign Up</Link>{" "}</Form.Label>
        </Form>
        
        </div>
      </>
    )
}

