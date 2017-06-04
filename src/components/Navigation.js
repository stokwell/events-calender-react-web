import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) =>  (
  <div>
    <Link to="/dashboard">Dashboard</Link>
  	<Link to="/anmelden">Anmelden</Link>
  </div>
)

export default Navigation;