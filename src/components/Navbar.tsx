import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

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
	const [mobileMenu, _setMobileMenu] = useState(false);
	const currentPage = (useRouter().pathname.match(/(\/[a-z]*)/) || '')[0];

	const setMobileMenu = (value: boolean) => {
		if (value) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		_setMobileMenu(value);
	};

	const toggleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
	};

	useEffect(() => {
		// Add 'Route change' event
		Router.events.on('routeChangeStart', () => {
			setMobileMenu(false);
		});
	}, []);

	const navLinks = links.map((link) => (
		<Link href={link.href} key={link.href}>
			<a className={`nav-button ${link.href === currentPage ? 'active' : ''}`}>{link.title}</a>
		</Link>
	));

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
						<img src="/images/logo.png" alt="Logo Broadway UTT" />
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
