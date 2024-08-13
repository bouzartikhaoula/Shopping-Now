import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const TopNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav.Link className="navbar-brand" as={NavLink} to="/" href="#home">
            Shopping Now
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/product">
                Product
              </Nav.Link>

              <NavDropdown title="Catigories" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/kitchen">Kitchen</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/waiting"> waiting room </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/bedroom">bedroom</NavDropdown.Item>
                
              </NavDropdown>

              <Nav.Link as={NavLink} to="/contact">
                contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/detailles">
                <div className="d-flex" style={{ position: "relative" }}>
                  <h3>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </h3>
                  <p
                    style={{
                      position: "absolute",
                      color: "white",
                      top: "13px",
                      right: "-9px",
                      backgroundColor: "red",
                      borderRadius: "88%",
                      padding: "0 6px",
                    }}
                  >
                    2
                  </p>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
