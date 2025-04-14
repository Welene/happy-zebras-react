import React from 'react';
import './SearchInput.css';

function SearchInput() {
	return (
		<section className="search-section">
			<input type="text" className="search-section__search-field" />
			<button className="search-section__btn">Search</button>
		</section>
	);
}

export default SearchInput;
