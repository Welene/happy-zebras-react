import React from 'react';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { useSearchFetch } from '../../hooks/useSearchFetch';
import MovieList from '../../components/MovieList/MovieList';
import './resultsPage.css';

function ResultsPage() {
	const { search } = useParams();
	const APIKEY = '378ca18a';
	const searchUrl = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${search}`;
	const { data, isLoading, isError } = useSearchFetch(searchUrl);
	// gets data, isLoading & isError from useSearchFetch, mixes it with our own (searchUrl) search to check response/results

	if (isLoading) return <p className="error-p">Loading...</p>;
	// if the page is loading - shows a loading msg

	if (isError || (Array.isArray(data) && data.length === 0)) {
		// isError = false API call *OR* data length is 0 (no movies / empty array) ...
		return (
			<section className="page page-results">
				<Header />

				<p className="error-p">
					{/* then the page shows an error msg with the movie you searched for */}
					'{search}' is not here - try another movie?
				</p>
			</section>
		);
	}

	return (
		<section className="page page-results">
			<Header />
			<MovieList
				title={`🎬 Search Results 🎬`}
				movieList={Array.isArray(data) ? data : []}
			/>
		</section>
	);
}

export default ResultsPage;
