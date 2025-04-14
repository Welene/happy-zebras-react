import React from 'react';

function Header() {
	return (
		<header className="header-section">
			{/* sett logo direkte inn her */}
			{/* importer <NavItem/> + <SearchInput/> her */}
			{/* importer <Header/> på alle sider ( opp til app.jsx først?) */}
			<NavItem />
			<SearchInput />
		</header>
	);
}

export default Header;
