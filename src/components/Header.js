import React, { Component } from 'react'
import {Navbar, Nav,Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Twittter</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link className='span'>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/User">
                  <Nav.Link href="">User</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/posts">
                  <Nav.Link href="Posts">Posts</Nav.Link>
                </LinkContainer>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}
