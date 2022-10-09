import React, { Component } from 'react'

import {Container, Nav, Navbar} from "react-bootstrap"

export default class DisplayNavBar extends Component {
  render() {
    return (
      <Navbar bg= "warning" expand = "lg">
        <Container>
            <Navbar.Brand href="/" >
                <img src ="https://gdj-inr5u0ip5pewom.stackpathdns.com/wp-content/uploads/2020/12/best-logos-2020-4.jpg" height="100" alt="Logo of our site"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  fs-5" >
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Input">Input</Nav.Link>
            <Nav.Link href="/Excuser">Excuser</Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
