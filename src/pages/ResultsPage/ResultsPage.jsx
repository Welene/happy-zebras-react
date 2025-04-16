import React from 'react';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { useSearchFetch } from '../../hooks/useSearchFetch';
import MovieList from '../../components/MovieList/MovieList';
import './resultsPage.css';

import missingPoster from '../../assets/missing-poster.svg';
import { checkImageExists } from '../../Utils/utils';
// NESTE GANG:
// LEGGE TIL EN FALLBACK OM BILDET (poster) IKKE FINNES
// Sånn at man ikke får errors i konsollen
// VIS missing-profile.svg (elns) OM POSTER IKKE EKSISTERER FOR FILMEN

function ResultsPage() {
	const { search } = useParams();
	// henter search fra path fra URL ved hjelp av useParams funksjonen
	const searchUrl = `http://www.omdbapi.com/?apikey=144f166d&s=${search}`;
	// tar API-URL-en fra useFetchSearch og legger på search
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
