import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) =>  (
  <div>
    <Link to="/dashboard">Dashboard</Link>
  	<Link to="/login">Sign In</Link>
    <Link to="/signup">Sign Up</Link>
  </div>
)

export default Navigation;