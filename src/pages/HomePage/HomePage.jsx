import './homePage.css';
import Header from '../../components/Header/Header';
import MovieList from '../../components/MovieList/MovieList';
import Carousel from '../../components/Carousel/Carousel';

import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';

const HomePage = () => {
	// ============ API-anrop MED custom hook ================

	const { data, isLoading, isError } = useFetch(
		'https://santosnr6.github.io/Data/favoritemovies.json'
	);

	if (isLoading) return <p className="error-p">Loading movies...</p>;
	if (isError) return <p className="error-p">Someting went wrong</p>;

	// ============== =================== =================== ===================
	//

	// ============ API-anrop utan custom hook ================

	// const [recommendedMovies, setRecommendedMovies] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

	// useEffect(() => {
	// 	const fectchRecommendedMovies = async () => {
	// 		try {
	// 			const res = await fetch(
	// 				'https://santosnr6.github.io/Data/favoritemovies.json'
	// 			);
	// 			if (!res.ok) throw new Error('Failed to fetch movie data.');
	// 			const data = await res.json();
	// 			setRecommendedMovies(data);
	// 		} catch (err) {
	// 			setError(err.message);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};
	// 	fectchRecommendedMovies();
	// }, []);

	// ============== =================== =================== ===================

	return (
		<div className="page page-home">
			<Header />
			<main>
				{/* Trailor Carousel from Helene */}
				<section className="carousel-section">
					<Carousel />
				</section>

				<section className="recommendation-section">
					{data?.length > 0 ? (
						<MovieList
							movieList={data}
							title={'🎬 Our Recommendations 🎬'}
						/>
					) : (
						<p>No movies found.</p>
					)}

					{/* {loading && <p>Loading...</p>}
					{error && <p className="error">{error}</p>}
					{!loading && !error && (
						<MovieList
							movieList={recommendedMovies}
							title={'🎬 Our Recommendations 🎬'}
						/>
					)} */}
				</section>
			</main>
		</div>
	);
};

export default HomePage;
