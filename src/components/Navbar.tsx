import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import './Navbar.scss';

const links = [
	{
		title: 'Accueil',
		href: '/',
	},
	{
		title: 'La pièce',
		href: '/piece',
	},
	{
		title: "L'association",
		href: '/association',
	},
	{
		title: 'Nos partenaires',
		href: '/partenaires',
	},
	{
		title: 'Billetterie',
		href: '/billetterie',
	},
	{
		title: 'Infos pratiques',
		href: '/informations',
	},
];

const Navbar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const currentPage = (useRouter().pathname.match(/(\/[a-z]*)/) || '')[0];

	const navLinks = links.map((link) => (
		<Link href={link.href} key={link.href}>
			<a className={`nav-button ${link.href === currentPage ? 'active' : ''}`}>{link.title}</a>
		</Link>
	));

	const toggleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
	};

	return (
		<div id="navbar" className={mobileMenu ? 'active' : ''}>
			<button className="mobile-menu-button" onClick={toggleMobileMenu}>
				<div />
				<div />
				<div />
			</button>

			<div className="navbar-content">
				<Link href="/">
					<a>
						<img src="/static/images/logo.png" className="logo" />
					</a>
				</Link>

				<nav>{navLinks}</nav>
			</div>
		</div>
	);
};

export default Navbar;
