import React from 'react';
import Navigation from './Navigation'

import logo from '../static/images/fu-logo.png';

const Header = () => (
	<header className="header">
	    <div className="container">
        <img src={logo} alt="FU Logo"/>
	    </div>
      <nav>
          <Navigation/>
      </nav> 
	</header>

) 

export default Header;