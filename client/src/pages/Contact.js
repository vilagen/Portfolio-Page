import React, { Component } from "react";
import { Container, Form, Button} from "react-bootstrap";
import Nav from "../components/Navbar";
import Title from "../components/Title";
import "./style.css"

class Contact extends Component {

	state = {
		name: "",
		email: "",
		message: "",
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
		console.log(value)
		console.log(this.state.eName)
	};

	submitEmail = (name, email, message) => {
		const link = `mailto:davhart85@gmail.com`
		+ `?cc=${email}`
		+ `&subject=` + encodeURIComponent(`Profile Email`)
		+ `&body=` + encodeURIComponent(`Hello, my name is ${name}.\n\n${message}\n\n`);
		window.location.href = link
	}

    render() {
			return (
					<div>
						<Nav></Nav>
						<Title
						name="Contact Me">
						</Title>

							<Container>

								<Form 
									noValidate 
									validated={this.state.validated}
									onSubmit={this.submitEmail}>

									<Form.Group>
										<Form.Label><h5>Your Name</h5></Form.Label>
										<Form.Control 
										required
										type="text"
										onChange={ (event) => {this.setState({name: event.target.value}); console.log(this.state.name)} }
										/>
									</Form.Group>

									<Form.Group>
										<Form.Label><h5>Email</h5></Form.Label>
										<Form.Control 
										required
										type="email"
										onChange={ (event) => {this.setState({email: event.target.value}); console.log(this.state.email)} }
										/>
									</Form.Group>

									<Form.Group>
										<Form.Label><h5>Message</h5></Form.Label>
										<textarea
										required 
										className="form-control"
										rows="3"
										value={this.state.message}
										onChange={ (event) => {this.setState({message: event.target.value}); console.log(this.state.message)} }>
										</textarea>
									</Form.Group>

									<div className="d-flex flex-row-reverse">
										<Button 
										variant="primary" 
										className="border" 
										type="submit" 
										onClick={() => this.submitEmail(this.state.name, this.state.email, this.state.message)}>
										Submit
										</Button>
									</div>

								</Form>

							</Container>

							<footer class="footer container-fluid bg-dark text-light d-flex justify-content-center">
							</footer>  

					</div>
        )
    }
}

export default Contact