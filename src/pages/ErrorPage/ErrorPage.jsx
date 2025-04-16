import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './errorPage.css';

function ErrorPage() {
	return (
		<section className="page page-error">
			<figure className="page-error__image-container">
				<img
					src="../src/assets/404-error.svg"
					alt="Not found"
					className="page-error__image"
				/>
			</figure>
			<h1 className="page-error__title">The page was not found</h1>
			<p className="page-error__text">
				This is not the page you were looking for. Check the link or go
				back to the home page.
			</p>
			<Link to="/" className="page-error__button">
				Go to homepage
			</Link>
		</section>
	);
}

export default ErrorPage;
