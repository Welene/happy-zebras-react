import './movieList.css';
import MovieItem from '../MovieItem/MovieItem';
import { useLocalStorageFavorites } from '../../hooks/useLocalStorageFavorites';
function MovieList({ movieList, title }) {
	const { favorites, toggleFavorites, isFavorite } =
		useLocalStorageFavorites();
	return (
		<section className="list-section">
			<h1 className="list-section__header">{title}</h1>
			<ul className="list-section__grid">
				{movieList.map((movie, index) => (
					<MovieItem
						key={index}
						movie={movie}
						toggleFavorites={toggleFavorites}
						isFavorite={isFavorite}
					/>
				))}
			</ul>
		</section>
	);
}

export default MovieList;
