import axios from 'axios';
import { useState, useEffect } from 'react';

export const useSearchFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then((response) => {
				// Här antar vi att svardata är objekt med en 'Search' nyckel som innehåller en array
				if (response.data.Search) {
					setData(response.data.Search); // Sätt datan direkt som array från 'Search'
				} else {
					setData([]); // Om inget 'Search' finns, sätt data till en tom array
				}
			})
			.catch((error) => {
				console.log('Fetch error: ', error);
				setIsError(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [url]);

	return { data, isLoading, isError };
};

// useFetch("http://www.omdbapi.com/?apikey=[yourkey]&s=[söksträng]")
