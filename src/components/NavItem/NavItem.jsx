import React from 'react';
import { Link } from 'react-router-dom';

function NavItem() {
	return (
		<nav className="navigation-section">
			<Link className="navigation-section__favorites" to="/favorite">
				Favorites
			</Link>
		</nav>
	);
}

export default NavItem;
