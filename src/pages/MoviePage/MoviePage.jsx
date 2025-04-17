import './moviePage.css';
import Header from '../../components/Header/Header';
import missingPoster from '../../assets/missing-poster.svg';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorageFavorites } from '../../hooks/useLocalStorageFavorites';

const MoviePage = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const { favorites, toggleFavorites, isFavorite } =
		useLocalStorageFavorites();
	const APIKEY = '378ca18a';

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showFullPlot, setShowFullPlot] = useState(false); // <-- New state for toggle

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const response = await axios.get(
					`https://www.omdbapi.com/?apikey=${APIKEY}&plot=full&i=${id}`
				);
				if (response.data.Response === 'False')
					throw new Error('Movie not found!');
				setMovie(response.data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchMovieDetails();
	}, [id]);

	if (loading) return <p className="error-p">Loading...</p>;
	if (error) return <p className="error-p">Error: {error}</p>;

	// Helper function to shorten plot text
	const getShortPlot = (plot) =>
		plot.split(' ').slice(0, 40).join(' ') + '...';

	return (
		<div className="page page-movie">
			<Header />

			<main className="movie-page-main">
				<h2 className="movie-details-title">🎬 Movie Information 🎬</h2>

				<section className="movie-detail-wrapper">
					{/* Left column (Poster & Title) */}
					<article className="movie-left">
						<h1 className="movie-detail-title">{movie.Title}</h1>
						<img
							className="movie-page__poster"
							src={
								movie.Poster !== 'N/A'
									? movie.Poster
									: missingPoster
							}
							alt={`${movie.Title} Poster`}
						/>
					</article>

					{/* Right column (Info + Star) */}
					<article className="movie-info">
						<FavoriteButton
							toggleFavorites={toggleFavorites}
							isFavorite={isFavorite}
							movie={movie}
							position="relative"
						/>
						<hr className="section-divider" />
						<p className="movie-info-top">
							<strong>Rated:</strong> {movie.Rated} |{' '}
							<strong>Genre:</strong> {movie.Genre} |{' '}
							<strong>Runtime:</strong> {movie.Runtime} |{' '}
							<strong>Released:</strong> {movie.Released}
						</p>
						<hr className="section-divider" />
						<p>
							<strong>Ratings:</strong> {movie.imdbRating}/10
						</p>
						<hr className="section-divider" />
						<p>
							<strong>Plot:</strong>{' '}
							{showFullPlot
								? movie.Plot
								: getShortPlot(movie.Plot)}
							<button
								onClick={() => setShowFullPlot((prev) => !prev)}
								style={{
									marginLeft: '0.5rem',
									color: 'var(--yellow-clr)',
									background: 'none',
									border: 'none',
									cursor: 'pointer',
									fontWeight: 'bold',
									fontFamily: 'inherit',
									fontSize: '1rem',
									textDecoration: 'underline',
								}}>
								{showFullPlot ? 'Read less' : 'Read more'}
							</button>
						</p>
						<hr className="section-divider" />
						<section className="movie-meta">
							<p className="meta-item">
								Director: {movie.Director}
							</p>
							<p className="meta-item">Writer: {movie.Writer}</p>
							<p className="meta-item">Actors: {movie.Actors}</p>
						</section>
					</article>
				</section>
			</main>
		</div>
	);
};

export default MoviePage;
