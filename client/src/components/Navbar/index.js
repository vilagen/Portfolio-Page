import React from "react";
import { Navbar, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

export default function Nav() {   
return (
    <Navbar className="navbar-expand-md navbar-dark bg-dark">
      <Container>

        <a className="navbar-brand" href="/">David Hart</a>

        <DropdownButton variant="dark" title="Portolio">
          <LinkContainer to="/"><Dropdown.Item>Home</Dropdown.Item></LinkContainer>
          <LinkContainer to="/projects"><Dropdown.Item>Projects</Dropdown.Item></LinkContainer>
          <LinkContainer to="/contact"><Dropdown.Item>Contact</Dropdown.Item></LinkContainer>
        </DropdownButton>
    
      </Container>
    </Navbar>
  )
}