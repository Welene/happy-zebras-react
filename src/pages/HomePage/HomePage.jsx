import './homePage.css';
import Header from '../../components/Header/Header';
import MovieList from '../../components/MovieList/MovieList';
import Carousel from '../../components/Carousel/Carousel';
import { useFetch } from '../../hooks/useFetch';

const HomePage = () => {
	const { data, isLoading, isError } = useFetch(
		'https://santosnr6.github.io/Data/favoritemovies.json'
	);

	if (isLoading) return <p className="error-p">Loading movies...</p>;
	if (isError) return <p className="error-p">Someting went wrong</p>;

	return (
		<div className="page page-home">
			<Header />
			<main>
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
				</section>
			</main>
		</div>
	);
};

export default HomePage;
