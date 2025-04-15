import React from 'react';
import { useSearchFetch } from '../../hooks/useSearchFetch';
import MovieList from '../../components/MovieList/MovieList';

function HomePage() {
	const { data, isLoading, isError } = useSearchFetch(
		'http://www.omdbapi.com/?apikey=378ca18a&s=lord'
	);
	if (isLoading)
		return (
			<section>
				<h1>is loading</h1>
			</section>
		);
	if (isError)
		return (
			<section>
				<h1>is error</h1>
			</section>
		);

	return (
		<section className="page page-home">
			<h1 className="TEST">TESTTEST</h1>
			{data && <MovieList movieList={data} title={'Search test'} />}
		</section>
	);
}

export default HomePage;
