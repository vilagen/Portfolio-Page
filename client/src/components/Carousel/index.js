import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap"
import "./style.css"

export function ProjectList({children}) {
	return <ul className="list-group">{children}</ul>;
}


// info will come from a JSON file
export function ProjectListItem({
	href,
	image,
	alt,
	title,
	description2
}) {
		return (

			<Container>
				<div className="border my-2 bg-white">

					<div className="d-flex justify-content-between">
						<h4 className="m-3">{title}</h4>
							<section>
		
								<a className="btn btn-primary" 
								href={href}>Link</a>
	
							</section>    
					</div>
		
					<Row>
		
						<Col xs={4} sm={2}>
							<img className="test m-3" src={image} alt={alt} />
						</Col>
		
						<Col xs={8} sm={10}>
							<p>{description2}</p>
						</Col>
		
					</Row>

				</div>

			</Container>
		)
	}