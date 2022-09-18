import React from "react";
import logo from '../images/logo.svg'
const Nav = () => {
	return (
		<nav className='navbar'>
			<ul className="nav-list">
				<li className='item-logo'>
					<div className='logo'> <img src={logo} alt='logo'/> </div>
				</li>
				<li className='item-title'>
					<span> React Course - Project 1</span>
				</li>
			</ul>
		</nav>
	);
};
export default Nav;
