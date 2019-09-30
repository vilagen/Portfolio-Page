import React from "react";
import { Navbar, Container, Dropdown, DropdownButton } from 'react-bootstrap';

export default function Nav() {   
return (
    <Navbar className="navbar-expand-md navbar-dark bg-dark">
      <Container>

        <a className="navbar-brand" href="/">David Hart</a>

        <DropdownButton variant="dark" title="Portolio">
          <Dropdown.Item href="/">Home</Dropdown.Item>
          <Dropdown.Item href="/">Projects</Dropdown.Item>
          <Dropdown.Item href="/">Contact</Dropdown.Item>
        </DropdownButton>
    
      </Container>
    </Navbar>
  )
}