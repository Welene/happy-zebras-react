import React, { useState, useEffect } from 'react';
import './Carousel.css';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

function Carousel() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchTopMovies = async () => {
			const response = await fetch(
				'https://santosnr6.github.io/Data/favoritemovies.json'
			);
			const movies = await response.json();
			setMovies(movies);
		};

		fetchTopMovies();
	}, []);

	const [activeTrailer, setActiveTrailer] = useState(0);

	const nextTrailer = () => {
		setActiveTrailer((prev) => (prev + 1) % movies.length);
	};

	const prevTrailer = () => {
		setActiveTrailer((prev) => (prev - 1 + movies.length) % movies.length);
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
