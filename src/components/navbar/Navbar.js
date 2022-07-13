import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Offcanvas } from 'react-bootstrap'
import './navbar.css'
function Navbarr() {
  return (
    <Fragment>
      <>
        {['xxl'].map((expand) => (
          <Navbar key={expand} expand={expand} id="navbar" fixed="top">
            <Container fluid>
              <Navbar.Brand href="#" className="text-light text-center">
                <img id="image" src={require('./../assets/images/Logo-01.f5a573fa905f8f034247.png')} style={{width: "33%", height: "51%"}}  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="text-light" />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton >
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Thehandycrew
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ backgroundColor: "black" }}>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1" className="text-light">Home</Nav.Link>
                    <NavDropdown
                      title="services"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      style={{ backgroundColor: "color" }}
                    >
                      <div className="row d-flex flex-direction-column">
                        <div className="col-6">
                          <NavDropdown.Item href="#action3" className="text-light">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action4" className="text-light">
                            Another action
                          </NavDropdown.Item>
                          {/* <NavDropdown.Divider /> */}
                          <NavDropdown.Item href="#action5" className="text-light">
                            Something else here
                          </NavDropdown.Item>
                        </div>

                        <div>
                          <div className="col-6">
                            <NavDropdown.Item href="#action3" className="text-light">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" className="text-light">
                              Another action
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#action5" className="text-light">
                              Something else here
                            </NavDropdown.Item>
                          </div>

                        </div>

                      </div>

                    </NavDropdown>

                    <Nav.Link href="#action2" className="text-light">About us</Nav.Link>
                    <Nav.Link href="#action2" className="text-light">contact us</Nav.Link>


                  </Nav>

                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </Fragment>
  )
}

export default Navbarr
