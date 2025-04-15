import './movieList.css';
import MovieItem from '../MovieItem/MovieItem';

function MovieList({ movieList, title }) {
	return (
		<section className="list-section">
			<h1 className="list-section__header">{title}</h1>
			<ul className="list-section__grid">
				{movieList.map((movie, index) => (
					<MovieItem key={index} movie={movie} />
				))}
			</ul>
		</section>
	);
}

export default MovieList;
