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

	const year = new Date().getFullYear();

	return (
		<div id="navbar" className={mobileMenu ? 'active' : ''}>
			<button className="mobile-menu-button" onClick={toggleMobileMenu}>
				<div />
				<div />
				<div />
			</button>

			<div className="navbar-content">
				<Link href="/">
					<a className="logo">
						<img src="/static/images/logo.png" />
					</a>
				</Link>

				<nav>{navLinks}</nav>

				<footer>
					<div className="social-links">
						<a href="https://www.facebook.com/broadwayUTT/" target="_blank" rel="noreferrer noopener">
							<i className="fab fa-facebook-f" />
						</a>
						<a href="https://www.instagram.com/broadwayutt/" target="_blank" rel="noreferrer noopener">
							<i className="fab fa-instagram" />
						</a>
						<Link href="/informations">
							<a>
								<i className="far fa-envelope" />
							</a>
						</Link>
					</div>

					<div className="copyright">Tous droits réservés &copy; {year} - Broadway&nbsp;UTT</div>

					<Link href="/mentions-legales">
						<a className="legal-link">Mentions légales</a>
					</Link>
				</footer>
			</div>
		</div>
	);
};

export default Navbar;
