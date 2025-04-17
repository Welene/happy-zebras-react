import { useEffect, useState } from 'react';

export const useLocalStorageFavorites = () => {
	const [favorites, setFavorites] = useState(() => {
		const stored = localStorage.getItem('favorites');
		return JSON.parse(stored) || [];
	});

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	const toggleFavorites = (movie) => {
		// kolla om movie finns i favorites, om inte lägg till den annars ta ut den ur favorites
		setFavorites((prevFavorites) => {
			const isAlreadyFavorite = prevFavorites.some(
				(fav) => fav.imdbID === movie.imdbID
			);

			if (isAlreadyFavorite) {
				// Om filmen redan finns i favoriter => Ta bort filmen från favoriter
				return prevFavorites.filter(
					(fav) => fav.imdbID !== movie.imdbID
				);
			} else {
				//Om den inte finns redan => lägg till den in favoriter
				return [...prevFavorites, movie];
			}
		});
	};

	const isFavorite = (imdbID) => {
		return favorites.some((fav) => fav.imdbID === imdbID);
	};

	return { favorites, toggleFavorites, isFavorite };
};
