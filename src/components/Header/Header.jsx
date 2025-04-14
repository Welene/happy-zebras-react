import React from 'react';
import NavItem from '../NavItem/NavItem';
import SearchInput from '../SearchInput/SearchInput';
import logo from '../../assets/logo.svg';
import './Header.css';

function Header() {
	return (
		<header className="header-section">
			{/* importer <Header/> på alle sider */}
			<img
				className="header-section__logo"
				src={logo}
				alt="My movie database logo"
			/>
			<SearchInput />
			<NavItem />
		</header>
	);
}

export default Header;
