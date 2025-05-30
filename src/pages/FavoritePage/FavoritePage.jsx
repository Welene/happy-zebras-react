import './favoritePage.css';
import Header from '../../components/Header/Header';
import MovieList from '../../components/MovieList/MovieList';
import { useLocalStorageFavorites } from '../../hooks/useLocalStorageFavorites';

const FavoritePage = () => {
	const { favorites } = useLocalStorageFavorites();

	return (
		<div className="page page-favorites">
			<Header />
			<main>
				<section className="favorites-section">
					<h1 className="favorites-title">⭐ My Favorites ⭐</h1>

					<section className="favorites-content-box">
						{favorites.length === 0 ? (
							<p className="favorites-empty">
								No favorites added yet!
							</p>
						) : (
							<MovieList movieList={favorites} title="empty" />
						)}
					</section>
				</section>
			</main>
		</div>
	);
};

export default FavoritePage;
