import React from "react";
import { Carousel } from "react-bootstrap"
// import "./style.css"

export function ProjectList({children}) {
	return <Carousel className="list-group">{children}</Carousel>;
}

// info will come from a JSON file
export function CarouselListItem({
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
				className="d-block slidePic"
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

				{/* <Carousel className="bg-dark">

						<Carousel.Item>
						<a href="https://guarded-wildwood-51320.herokuapp.com/">
						<img
						className="d-block slidePic"
						src="/photos/friendfinder.PNG"
						alt="Friend Finder"
						/>
						</a
						>
							<div></div>
							<Carousel.Caption>
								<h3>Friend Finder</h3>
								<p>A website to rate how compatible you are based on a quiz</p>
							</Carousel.Caption>

						</Carousel.Item> */}

					{/* </Carousel> */}