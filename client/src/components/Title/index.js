import React from "react";
import { Container } from 'react-bootstrap';
import "./style.css";

export default function Title({
	name
}) {
	return (
		<div>
		<Container className="container my-3 bgLightGray">
			<h1 className="display-4 text-center">{name}</h1>

		</Container>
		<div className="d-flex justify-content-center">
		<a className="btn btn-primary btn-lg my-2 mx-4" href="https://github.com/vilagen" id="gitLink"><span class="fab fa-github pr-2"></span>Github</a>
        	<a className="btn btn-primary btn-lg my-2 mx-4" href="http://www.linkedin.com/in/david-addison-hart" id="linkedInLink"><span class="fab fa-linkedin"></span> LinkedIn</a>
		</div>
		</div>
	)
}