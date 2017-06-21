import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

import logo from '../static/images/fu-logo.png';

const Header = () => (
	<header className="header">
			<div className="container">
				<Link to="/">
					<img src={logo} alt="FU Logo"/>
				</Link>
			</div>
			<nav>
				<Navigation/>
			</nav>
	</header>
)

export default Header;
