import './homePage.css';
import Header from '../../components/Header/Header';
import MovieList from '../../components/MovieList/MovieList';

import React, { useState, useEffect } from 'react';

const HomePage = () => {
	const [recommendedMovies, setRecommendedMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRecommendedMovies = async () => {
			try {
				const res = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
				if (!res.ok) throw new Error('Failed to fetch movie data.');
				const data = await res.json();
				setRecommendedMovies(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		// Get local favorites
		const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
		setFavorites(savedFavorites);

		fetchRecommendedMovies();
	}, []);

	const toggleFavorite = (imdbID) => {
		let updatedFavorites;
		if (favorites.includes(imdbID)) {
			updatedFavorites = favorites.filter(id => id !== imdbID);
		} else {
			updatedFavorites = [...favorites, imdbID];
		}
		setFavorites(updatedFavorites);
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
	};

	return (
		<div className="page page-home">
			<Header />

			<main>
				{/* Placeholder for Carousel */}
				<section className='carousel-section'>
					{/* <Carousel /> */}
				</section>

				<section className='recommendation-section'>
					{loading && <p>Loading...</p>}
					{error && <p className='error'>{error}</p>}

					{!loading && !error && (
						<section className="list-section">
							<h1 className="list-section__header">🎬 Our Recommendations 🎬</h1>
							<ul className="list-section__grid">
								{recommendedMovies.map((movie, index) => (
									<li className="movie-card-wrapper" key={index}>
										<div className="favorite-card-container">
											<button
												className={`favorite-btn ${favorites.includes(movie.imdbID) ? 'favorite' : ''}`}
												onClick={() => toggleFavorite(movie.imdbID)}
											></button>
											<MovieList movieList={[movie]} />
										</div>
									</li>
								))}
							</ul>
						</section>
					)}
				</section>
			</main>
		</div>
	);
};

export default HomePage;
