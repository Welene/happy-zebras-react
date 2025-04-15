import React from 'react';
import './SearchInput.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchFetch } from '../../hooks/useSearchFetch';

const handleSearch(navigate, searchValue) => {
	navigate (`/results/${searchValue}`);

function SearchInput() {
	const [searchValue, setSearchValue] = useState('');
	// Lager en useState, searchValue skal sendes som prop til handleSearh funksjonen
	const navigate = useNavigate();
	// en hook fra react-biblioteket - lar deg bruke en funksjon (navigate-funksjonen) til å navigere når den sendes som prop til handleSearch
	return (
		<section className="search-section">
			<input type="text" className="search-section__search-field" value = {searchValue} onChange={(e) => setSearchValue (e.target.value)} />
			<button className="search-section__btn" onClick={() => handleSearch (navigate, searchValue)}>Search</button>
		</section>
	);
	}
}

export default SearchInput;
