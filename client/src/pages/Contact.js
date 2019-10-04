import React, { Component } from "react";
import { Container, Form, Button} from "react-bootstrap";
import Nav from "../components/Navbar";
import Title from "../components/Title";
import "./style.css"

class Contact extends Component {

    render() {
        return (
            <div>
				<Nav></Nav>
				<Title
				name="Contact Me"></Title>

                <Container>

                    <Form>

                        <Form.Group>
                            <Form.Label><h5>Your Name</h5></Form.Label>
                            <Form.Control type="name" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><h5>Email</h5></Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><h5>Message</h5></Form.Label>
                            <textarea class="form-control" id="eMessage" rows="3"></textarea>
                        </Form.Group>

                        <div class="d-flex flex-row-reverse">
                            <Button variant="primary" className="border" type="submit" id="eSubmit">Submit</Button>
                        </div>

                    </Form>

                </Container>

                <footer class="footer container-fluid bg-dark text-light">
                    <p class="text-center">Copyright 2019</p>
                </footer>  

            </div>
        )
    }
}

export default Contact