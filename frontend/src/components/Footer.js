import React from "react"
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <Navbar bg='dark' variant='light'>
        <Container className='text-center justify-content-center'>
          <Row className='align-items-center'>
            <Col className='m-3 px-5'>
              <img
                src='../../images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
              />
              <span className='logo-text p-2'>ProShop</span>
              <p className='p-2'>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </Col>
            <Col className='m-3 px-5 text-center'>
              <h5 className='logo-text'>Follow Us</h5>
              <li className='list-unstyled'>
                <a href='https://twitter.com/'>Twitter</a>
              </li>
              <li className='list-unstyled'>
                <a href='https://www.facebook.com/'>Facebook</a>
              </li>
              <li className='list-unstyled'>
                <a href='https://www.instagram.com/'>Instagram</a>
              </li>
              <li className='list-unstyled'>
                <a href='https://www.youtube.com/'>Youtube</a>
              </li>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <footer>Copyright &copy; ProShop</footer>
        </div>
      </Row>
    </>
  )
}

export default Footer
