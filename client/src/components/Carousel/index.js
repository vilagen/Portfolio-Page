import React from "react";
import { Carousel } from "react-bootstrap"
// import "./style.css"


// info will come from a JSON file
export default function Carous({
	href,
	image,
	alt,
	title,
	description
	}) 

	{
		return (
			
			<Carousel.Item>
				<a href={href}>
				<img
				className="d-block w-100"
				src={image}
				alt={alt}
				/>
				</a>

					<Carousel.Caption>
						<h3>{title}</h3>
						<p>{description}</p>
					</Carousel.Caption>

			</Carousel.Item>

	)
}