import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then((response) => setData([...response.data]))
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
