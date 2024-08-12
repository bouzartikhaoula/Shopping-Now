import Container from 'react-bootstrap/Container';
import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNavbar = () => {
  return (
    <>

<Navbar bg='dark' variant='dark' expand="lg" >
      <Container>
        <Nav.Link className='navbar-brand' as={NavLink} to="/" href="#home">Shopping  Now</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link  as={NavLink} to="/">Home</Nav.Link>

            <NavDropdown title="Catigories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/product">Product</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default TopNavbar