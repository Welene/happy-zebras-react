import './favoriteButton.css';
import React, { useEffect, useState } from 'react';
// import { useLocalStorageFavorites } from '../../hooks/useLocalStorageFavorites';

// import { ReactComponent as StarIcon } from '../../assets/star.svg';

function FavoriteButton({
	movie,
	toggleFavorites,
	isFavorite,
	position = 'absolute',
}) {
	const [isFilled, setIsFilled] = useState(false);
	// const { favorites, toggleFavorites, isFavorite } =
	// 	useLocalStorageFavorites();

	useEffect(() => {
		setIsFilled(isFavorite(movie.imdbID));
	}, [movie.imdbID, isFavorite]);

	const handleClick = () => {
		setIsFilled((prev) => !prev);
		toggleFavorites(movie);
	};

	return (
		<button
			aria-label={`Mark ${movie.Title} as favorite`}
			className={`favorite-btn ${
				position === 'relative' ? 'relative' : 'absolute'
			}`}
			onClick={handleClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 -4 24 29"
				width="35"
				height="35"
				stroke="#ecc901"
				strokeWidth="2"
				fill={isFilled ? '#ecc901' : 'none'}>
				<path
					d="M12 17.27L18.18 21a1 1 0 001.45-1.06l-1.64-7.03 5.19-4.53a1 1 0 00-.56-1.75l-7.16-.61-2.65-6.48a1 1 0 00-1.84 0L8.54 6.02l-7.16.61a1 1 0 00-.56 1.75l5.19 4.53L4.37 19.94A1 1 0 005.82 21l6.18-3.73z"
					strokeLinejoin="round"
					strokeLinecap="round"
				/>
			</svg>
		</button>
	);
}

export default FavoriteButton;
