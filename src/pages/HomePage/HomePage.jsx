import './homePage.css';
import Header from '../../components/Header/Header';
import MovieList from '../../components/MovieList/MovieList';

import React from 'react';
import { useState, useEffect } from 'react';

const HomePage = () => {
	const [recommendedMovies, setRecommendedMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);


	useEffect(() => {

		const fectchRecommendedMovies = async () => {
			try {
				const res = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
				if (!res.ok) throw new Error('Failed to fetch movie data.');
				const data = await res.jason();
				setRecommendedMovies(data);

			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fectchRecommendedMovies();

	}, []);

	return (
		<div className="page page-home">

			<Header />
			<main>
				{/* Trailor Carousel from Helene */}
				<section className='carousel-section'>
					<Carousel />
				</section>


				<section className='recommendation-section'>
					<h2>🎬 Our Recommendations 🎬  </h2>
					{loading && <p>Loading...</p>}
					{error && <p className='error'>{error}</p>}
					{!loading && !error && <MovieList movies={recommendedMovies} />}
				</section>

			</main>

		</div>
	);

};

export default HomePage;