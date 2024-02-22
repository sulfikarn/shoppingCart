import React, { Fragment } from 'react'
import { Container, Navbar } from 'react-bootstrap';
function Header() {
  return (
    <Fragment>
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  )
}

export default Header
