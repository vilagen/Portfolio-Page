import React from "react";
import { Container, Card } from 'react-bootstrap';
import "./style.css";

export default function Title({
	name
}) {
	return (
		<Container className="container d-flex justify-content-between align-items-center my-3 bgLightGray">
			<h1 className="display-4" id="titleLeft">{name}</h1>
			<Card className="bg-info" id="contentCard">
				<div className="card-header bg-light my-2">My Content:</div>
					<a className="btn btn-primary btn-lg my-2 mx-4" href="https://github.com/vilagen" id="gitLink">Github</a>
          <a className="btn btn-primary btn-lg my-2 mx-4" href="www.linkedin.com/in/david-addison-hart" id="linkedInLink">LinkedIn</a>
			</Card>
		</Container>
	)
}