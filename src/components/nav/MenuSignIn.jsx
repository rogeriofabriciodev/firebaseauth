import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Navbar, NavDropdown, Nav, Image, Row, Col } from 'react-bootstrap'

const MenuSignIn = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Model-APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Row>
              <Col>
                <Image src={firebase.auth().currentUser.photoURL} alt="RF" roundedCircle width="40px" height="40px" className="justify-content-center" />
                <span className='text-white mt-2 ml-3 mr-3'>{firebase.auth().currentUser.displayName}</span>
              </Col>
            </Row>
            <Nav.Link onClick={() => firebase.auth().signOut()}>Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MenuSignIn