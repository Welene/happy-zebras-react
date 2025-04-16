import './MovieItem.css';
import React, { useEffect, useState } from 'react';
import missingPoster from '../../assets/missing-poster.svg';
import { checkImageExists } from '../../Utils/utils';
import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function MovieItem({ movie, toggleFavorites, isFavorite }) {
	const [poster, setPoster] = useState(movie.Poster);

	useEffect(() => {
		const fetchPoster = async () => {
			const validPoster = await checkImageExists(movie.Poster);
			setPoster(validPoster);
		};
		fetchPoster();
	}, [movie.Poster]);
	return (
		<li className="movie-item">
			<figure className="movie-item__image">
				<FavoriteButton
					toggleFavorites={toggleFavorites}
					isFavorite={isFavorite}
					movie={movie}
				/>
				<img
					src={poster} // Ternär operator för att kontrollera om en poster finns
					alt={`poster of ${movie.Title}`}
				/>
			</figure>
			<Link to={`/movie/${movie.imdbID}`} className="movie-item__title">
				{movie.Title}
			</Link>
		</li>
	);
}

export default MovieItem;
