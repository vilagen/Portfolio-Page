import React, { Component } from "react";
import { Container, Carousel, Row } from "react-bootstrap";
import Nav from "../components/Navbar";
import Title from "../components/Title";
import { ProjectList, ProjectListItem } from "../components/Carousel";
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

						{this.state.projects.map (project => {
							return (
								<Carousel.Item>
									<a href={project.href}>
									<img
									className="d-block slidePic"
									src={project.photo}
									alt={project.alt}
									/>
									</a>
									>
										<div></div>
										<Carousel.Caption>
											<h3>{project.title}</h3>
											<p>{project.description}</p>
										</Carousel.Caption>

								</Carousel.Item>
								)}
							)}

					</Carousel>

				</Container>

				<div className="mt-5"></div>

				<div>
				
					<ProjectList className>

						{this.state.projects.map (project => {
							return (

								<ProjectListItem
								key={project.id}
								href={project.href}
								github={project.github}
								image={project.photo}
								alt={project.alt}
								title={project.title}
								description2={project.description2}>
								</ProjectListItem>

							)
						})}

					</ProjectList>

				</div>

			<footer class="footer container-fluid bg-dark text-light">
				<p class="text-center">Copyright 2019</p>
			</footer>  

			</div>
		)
	}
}
	

export default Projects