import React, { Component, useRef, useState } from 'react'
import {Form, Button, Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth  } from '../context/AuthContect';
export default function SignUpForm() {
    const emailRef = useRef();
    const firstNameRef = useRef();
    const secondNameRef = useRef();
    const passwordRef = useRef();
    const passwordConfRef = useRef();
    const {signup, currentUser } = useAuth();

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    let navigate = useNavigate();
    async function handleSubmit(e) {
      e.preventDefault()
      
      if (passwordRef.current.value !== passwordConfRef.current.value) {
        return setError("Passwords do not match")
      }
      await signup(emailRef.current.value, passwordRef.current.value)
      .catch(err => console.log(JSON.stringify(err)) ).then(() => {
        setLoading(false)
        navigate("/dashboard", { replace: true });
      }
        )
    }

    return (
        <>
        <div>
          <h1>
          </h1>
            <Form className='text-black p-5 '>
            <h1 className="display-3 mb-4">Sign Up</h1>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form.Group className="mb-4 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" required placeholder="Enter email" ref={emailRef}/>
            </Form.Group>
            {/* <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text"  placeholder="First Name" ref={firstNameRef}/>
            </Form.Group>
            <Form.Group className="mb-4 " controlId="formBasicEmail" >
              <Form.Label>Second Name</Form.Label>
              <Form.Control type="text"  placeholder="Last Name" ref={secondNameRef}/>
            </Form.Group> */}
            <Form.Group className="mb-4" controlId="formBasicPassword" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required placeholder="Password" className='' ref={passwordRef}/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword" >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" required placeholder="Confirm Password" className='' ref={passwordConfRef} />
            </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Rememer Me" />
            </Form.Group>
            <Button variant="outline-dark d-block mx-auto mt-3 w-100" type="submit" disabled={loading} onClick={handleSubmit}>
                Submit
            </Button>
            <Form.Label>Already have an account?<Link to="/login" className="text-black"> Login</Link>{" "}</Form.Label>
        </Form>
        
        </div>
      </>
    )
}
