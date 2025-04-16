import './moviePage.css';
import Header from '../../components/Header/Header';
import missingPoster from '../../assets/missing-poster.svg';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MoviePage = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const response = await axios.get(`https://www.omdbapi.com/?apikey=378ca18a&i=${id}`);
				if (response.data.Response === 'False') throw new Error("Movie not found!");
				setMovie(response.data);

				const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
				setIsFavorite(storedFavorites.includes(response.data.imdbID));
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchMovieDetails();
	}, [id]);

	const toggleFavorite = () => {
		const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
		let updatedFavorites;

		if (isFavorite) {
			updatedFavorites = storedFavorites.filter(favId => favId !== movie.imdbID);
		} else {
			updatedFavorites = [...storedFavorites, movie.imdbID];
		}

		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		setIsFavorite(!isFavorite);
	};

	if (loading) return <p className="movie-page__loading">Loading...</p>;
	if (error) return <p className="movie-page__error">Error: {error}</p>;

	return (
		<div className="page page-movie">
			<Header />

			<main className="movie-page-main">
				<h2 className="movie-details-title">🎬 Movie Information 🎬</h2>

				<div className="movie-detail-wrapper">
					{/* Left column (Poster & Title) */}
					<div className="movie-left">
						<h1 className="movie-detail-title">{movie.Title}</h1>
						<img
							className="movie-page__poster"
							src={movie.Poster !== 'N/A' ? movie.Poster : missingPoster}
							alt={`${movie.Title} Poster`}
						/>
					</div>

					{/* Right column (Info + Star) */}
					<div className="movie-info">
						<button
							className={`favorite-btn ${isFavorite ? 'favorite' : ''}`}
							onClick={toggleFavorite}
							aria-label="Toggle Favorite"
						></button>

						<hr className="section-divider" />
						<p className="movie-info-top">
							<strong>Rated:</strong> {movie.Rated} |{" "}
							<strong>Genre:</strong> {movie.Genre} |{" "}
							<strong>Runtime:</strong> {movie.Runtime} |{" "}
							<strong>Released:</strong> {movie.Released}
						</p>
						<hr className="section-divider" />
						<p><strong>Ratings:</strong> {movie.imdbRating}/10</p>
						<hr className="section-divider" />
						<p><strong>Plot:</strong> {movie.Plot}</p>
						<hr className="section-divider" />
						<div className="movie-meta">
							<div className="meta-item">Director: {movie.Director}</div>
							<div className="meta-item">Writer: {movie.Writer}</div>
							<div className="meta-item">Actors: {movie.Actors}</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default MoviePage;
