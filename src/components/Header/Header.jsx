import React from 'react';
import NavItem from '../NavItem/NavItem';
import SearchInput from '../SearchInput/SearchInput';
import logo from '../../assets/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="header-section">
			{/* importer <Header/> på alle sider */}
			<Link className="header-section__logolink" to="/">
				<img
					className="header-section__logo"
					src={logo}
					alt="My movie database logo"
				/>
			</Link>
			<SearchInput />
			<NavItem />
		</header>
	);
}

export default Header;
