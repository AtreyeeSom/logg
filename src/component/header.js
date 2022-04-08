import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            {
              (localStorage.getItem('token') == null) ?
              []

                : 
                <>
                <Nav.Link href="/dash">Dashboard</Nav.Link>
                {/* <Nav.Link href="/log">LogOut</Nav.Link> */}
              </>
            }

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header