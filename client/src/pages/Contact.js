import React, { Component } from "react";
import { Container, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Nav from "../components/Navbar";
import Title from "../components/Title";
import "./style.css"

class Contact extends Component {

	state = {
		eName: "",
		email: "",
		message: "",
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
		console.log(value)
		console.log(this.state.eName)
	};

	// handleInputChangeEmail = event => {
	// 	const { name, value } = event.target;
	// 	this.setState({
	// 		[name]: value
	// 	});
	// 	console.log(value)
	// 	console.log(this.state.email)
	// };

	// handleInputChangeMessage = event => {
	// 	const {name, value} = event.target;
	// 	this.setState({
	// 		[name]: value
	// 	});
	// 	console.log(value)
	// 	console.log(this.state.message)
	// }


    render() {
        return (
            <div>
							<Nav></Nav>
							<Title
							name="Contact Me"></Title>

                <Container>

									<Form>

									<InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Username"
      aria-label="Username"
			aria-describedby="basic-addon1"
			value={this.state.eName}
			onChange={this.handleInputChange}
    />
  </InputGroup>


										<Form.Group>
											<Form.Label><h5>Your Name</h5></Form.Label>
											<Form.Control 
											type="text"
											onChange={this.handleInputChange}
											value={this.state.eName}
											/>
										</Form.Group>

										<Form.Group>
											<Form.Label><h5>Email</h5></Form.Label>
											<Form.Control type="email"  id="eMail" />
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