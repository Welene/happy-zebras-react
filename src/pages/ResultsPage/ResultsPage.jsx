import React from 'react';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { useSearchFetch } from '../../hooks/useSearchFetch';
import MovieList from '../../components/MovieList/MovieList';

function ResultsPage() {
	const { searchValue } = useParams();
	// henter searchValue fra URL ved hjelp av useParams funksjonen
	const searchUrl = `http://www.omdbapi.com/?apikey=144f166d&s=${searchValue}`;
	// tar API-URL-en fra useFetchSearch og legger på searchValue
	const { data, isLoading, isError } = useSearchFetch(searchUrl);
	// anropet useSearchFetch funksjonen og sender den searchUrl som parameter, sånn at funksjonen vet hva den skal søke på
	return (
		<section className="page page-results">
			<Header />
			<MovieList
				title={'🎬 Search Results 🎬'}
				movieList={Array.isArray(data) ? data : []}
			/>
		</section>
	);
}

export default ResultsPage;
