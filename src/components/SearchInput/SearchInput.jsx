import React from 'react';
import './SearchInput.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
	return (
		<section className="search-section">
			<input type="text" className="search-section__search-field" />
			<button className="search-section__btn">Search</button>
		</section>
	);
	SearchInputValue();
	// anroper SearchInputValue funksjonen
}

function SearchInputValue() {
	const [value, setValue] = useState('');
	// Lager en useState variabel til verdien man skriver inn i input-feltet
	const navigate = useNavigate();
	// en hook fra react-biblioteket - lar deg bruke en funksjon (navigate-funksjonen) til å navigere når den anropes
}

export default SearchInput;
