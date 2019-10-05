import React from "react";
import { Navbar, Container, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

export default function Nav() {   
return (
    <Navbar className="navbar-expand-md navbar-dark bg-dark">
      <Container>

        <LinkContainer to="/"><Navbar.Brand>David Hart</Navbar.Brand></LinkContainer>

        <DropdownButton variant="dark" title="Portolio">
          <LinkContainer to="/"><Dropdown.Item>Home</Dropdown.Item></LinkContainer>
          <LinkContainer to="/projects"><Dropdown.Item>Projects</Dropdown.Item></LinkContainer>
          <LinkContainer to="/contact"><Dropdown.Item>Contact</Dropdown.Item></LinkContainer>
        </DropdownButton>
    
      </Container>
    </Navbar>
  )
}