import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'
import ResizeableDiv from '../../components/ResizeableDiv'
import { useAuth } from '../../context/AuthContect'
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
    let navigate = useNavigate();
    const { signOut } = useAuth();
    async function handleSignOut() {
        signOut();
        navigate("/login", { replace: true });
    }

    return (
      <>
      <Container>
      <Row className='my-3 p-3 '>
          <Col m={12}>
            <ResizeableDiv xScale={50} timeScale={15} id={1} bookingTime={30}/>
            <ResizeableDiv xScale={50} timeScale={15} id={8} bookingTime={30}/>
          </Col>
          {/* <Col m={1}>
            <ResizeableDiv xScale={50} timeScale={15} id={2} bookingTime={90}/>
          </Col>
          <Col m={1}>
            <ResizeableDiv xScale={50} timeScale={15} id={3} bookingTime={90}/>
          </Col>
          <Col m={1}>
            <ResizeableDiv xScale={50} timeScale={15} id={4} bookingTime={30}/>
          </Col>
          <Col m={1}>
            <ResizeableDiv xScale={50} timeScale={15} id={5} bookingTime={15}/>
          </Col> */}
        </Row>
        <Button variant="outline-dark d-block mx-auto mt-3 w-100" type="submit" onClick={handleSignOut}>
                Sign Out
        </Button>
      </Container>     
      </>
    )
}

