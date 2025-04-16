import React from 'react';
import './SearchInput.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// function that navigates you to /results page + takes in navigate and searchValue prop = navigates to correct page BASED ON what searchValue is
const handleSearch = (navigate, searchValue) => {
	navigate(`/results/${searchValue}`);
};

function SearchInput() {
	const [searchValue, setSearchValue] = useState('');
	// Lager en useState, searchValue skal sendes som prop til handleSearh funksjonen
	const navigate = useNavigate();
	// en hook fra react-biblioteket - lar deg bruke en funksjon (navigate-funksjonen) til å navigere når den sendes som prop til handleSearch
	return (
		<section className="search-section">
			<input
				aria-label="Search for movies on MMDB"
				type="text"
				className="search-section__search-field"
				value={searchValue}
				// connects input 'value' with my searchValue, where the input value will be stored
				onChange={(e) => setSearchValue(e.target.value)}
				// input field listenes to a change (writing = change), takes that change and updates my setSearchValue to hold that user input
			/>
			<button
				// Checking if input is empty - if empty - prevents navigation
				aria-label="Search MMDB"
				className="search-section__btn"
				onClick={() => {
					if (searchValue === '') {
						return;
					} else {
						handleSearch(navigate, searchValue);
					}
				}}>
				{/* button listens to a click - when clicked - calls handleSearch function and sends 'navigate' & 'searchValue' prop with it */}
				Search
			</button>
		</section>
	);
}

export default SearchInput;
