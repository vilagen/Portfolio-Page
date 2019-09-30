import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";
import Nav from "../components/Navbar";
import Title from "../components/Title";
import Carous from "../components/Carousel";
import projects from "./projects.json";
import "./style.css"

class Projects extends Component {
	state = {
		projects
	}

	componentDidMount() {
		console.log(this.state.projects)
	}

	render() {
		return (
			<div>
				<Nav></Nav>
				<Title
				name="Projects"></Title>

				<Container>

					<Carousel className="bg-dark">

						<Carousel.Item>
						<a href="https://guarded-wildwood-51320.herokuapp.com/">
						<img
						className="d-block slidePic"
						src="/photos/friendfinder.PNG"
						alt="Friend Finder"
						/>
						</a>
							<div></div>
							<Carousel.Caption>
								<h3>Friend Finder</h3>
								<p>A website to rate how compatible you are based on a quiz</p>
							</Carousel.Caption>

						</Carousel.Item>

					</Carousel>

					{/* <Carousel>

						{this.state.projects.map (project => {
							return (
								<Carous
								href={project.href}
								image={project.photo}
								alt={project.alt}
								title={project.title}
								description={project.description}
								/>
							)
						}
					)}

					</Carousel> */}

				</Container>
			</div>
		)
	}
}

export default Projects