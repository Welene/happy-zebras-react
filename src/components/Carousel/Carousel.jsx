import React, { useState, useEffect } from 'react';
import './Carousel.css';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

function Carousel() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchTopMovies = async () => {
			try {
				const response = await fetch(
					'https://santosnr6.github.io/Data/favoritemovies.json'
				);
				if (response.data === 'False')
					throw new Error('Movie not found!');
				const movies = await response.json();
				setMovies(movies);
			} catch (error) {
				console.log(error);
			}
		};

		fetchTopMovies();
	}, []);

	const [activeTrailer, setActiveTrailer] = useState(0);

	const nextTrailer = () => {
		setActiveTrailer((prev) => {
			const newIndex = (prev + 1) % movies.length;
			return newIndex;
		});
	};

	const prevTrailer = () => {
		setActiveTrailer((prev) => {
			const newIndex = (prev - 1 + movies.length) % movies.length;
			return newIndex;
		});
	};

	return (
		<>
			<img
				src={arrowLeft}
				className="trailers-container__img trailers-container__img-left"
				alt="previous trailer"
				onClick={prevTrailer}
			/>
			{movies.slice(activeTrailer, activeTrailer + 5).map((movie, i) => (
				<iframe
					key={i}
					className={`trailers__video trailers__video-${i + 1}`}
					src={movie.Trailer_link}
				/>
			))}
			<img
				src={arrowRight}
				className="trailers-container__img trailers-container__img-right"
				alt="next trailer"
				onClick={nextTrailer}
			/>
		</>
	);
}

export default Carousel;
