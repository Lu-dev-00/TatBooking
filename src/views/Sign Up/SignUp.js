import React, { Component } from 'react'
import loginSVG from '../../assets/login.svg'
import SignUpForm from '../../components/SignUpForm'
import {Container, Col, Row} from 'react-bootstrap'
export default class SignUp extends Component {
  render() {
    return (
        <>
        <div className='login-container row mx-0 vh-sm-100 ' id='home'>
            <Container className="mx-auto my-auto login-form-container w-75 py-5">
            <Row>
                <Col xl-lg={5} className="br-2">
                    <div lg="img-split">
                    <SignUpForm className=""/>
                    </div>
                    
                </Col>
                <Col xl-lg={7} className="d-none d-lg-block img-split">
                    <div className='d-flex h-100'><img src={loginSVG}  className="m-auto w-100 d-block justify-center" alt=""/></div>
                </Col>
            </Row>
            </Container>
        </div>
    </>
    )
  }
}
