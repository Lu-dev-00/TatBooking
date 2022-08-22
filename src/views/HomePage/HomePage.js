import React, { Component } from 'react'
import { Button, Container, Card, Col, Row , CardImg} from 'react-bootstrap'
import bookingSVG from '../../assets/booking.svg'
import reminderSVG from '../../assets/reminder.svg'
import analyticsSVG from '../../assets/analytics.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContect';
export default function HomePage ()  {
    const { currentUser } = useAuth();
    console.log(currentUser)
    return (
    <>
    
      <Container fluid className='p-0 m-0'>
        <div className='landing-container row mx-0 vh-sm-100' id='home'>
            <div className='landing-text my-auto mx-auto w-50'>
                <h1 className='display-3 lead'>The personal assistant for tatoo artists</h1>
                <h4 className='fw-lighter d-none d-lg-block'>Manage all of your bookings all in one place and spend more time doing what you love.</h4>
                <Link to="/signup"><Button variant='light' className='mx-auto px-3 py-2 my-4 fw-bold rounded-1 w-sm-100'>Try now for free</Button> {' '}</Link>
                <Link to="/login"><Button variant='outline-light' className=' px-3 py-2 mx-1 fw-bold rounded-1 w-sm-100'>Exiting user?</Button> {' '}</Link>
            </div>
        </div>

        <Container className='my-4' >
        <Row xs={1} md={3} className="g-4">
        <Col>
            <Card  border="dark" text="dark">
            <Card.Header className='text-center  bg-dark text-white'>Booking</Card.Header>
            <CardImg src={bookingSVG} className="w-50 d-block mx-auto pt-2" height={180}/>
                <Card.Body>
                    <Card.Text>
                        Access, create and manage bookings from any device giving you more time to do what you love.
                    </Card.Text>
                    {/* <Button variant="dark" className='text-center w-auto m-auto d-block px-3'>More</Button> */}
                </Card.Body>
            </Card>
        </Col>
       
        <Col>
            <Card  border="dark" text="dark">
            <Card.Header className='text-center bg-dark text-white'>Reminder</Card.Header>
            <CardImg src={reminderSVG} className="w-50 d-block mx-auto pt-2" height={180}/>
                <Card.Body>
                
                    <Card.Text>
                        Access, create and manage bookings from any device giving you more time to do what you love.
                    </Card.Text>
                    {/* <Button variant="dark" className='text-center w-auto m-auto d-block px-3'>More</Button> */}
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card  border="dark" text="dark">
            <Card.Header className='text-center bg-dark text-white'>Analytics</Card.Header>
            <CardImg src={analyticsSVG} className="w-50 d-block mx-auto pt-2" height={180}/>
                <Card.Body>
                
                    <Card.Text>
                        Access, create and manage bookings from any device giving you more time to do what you love.
                    </Card.Text>
                    {/* <Button variant="dark" className='text-center w-auto m-auto d-block px-3'>More</Button> */}
                </Card.Body>
            </Card>
        </Col>
        </Row>
       
        </Container>    
      </Container>
    </>
    )
  }
