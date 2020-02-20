import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { logout, autoLogin } from '../utils/login';
import { State } from '../types';
import { Button } from './UI';

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
	const dispatch = useDispatch();
	const router = useRouter();
	const login = useSelector((state: State) => state.login);
	const [mobileMenu, _setMobileMenu] = useState(false);
	const currentPage = (router.pathname.match(/(\/[a-z]*)/) || '')[0];

	// Auto login
	useEffect(() => {
		dispatch(autoLogin());
	}, [dispatch]);

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
		router.events.on('routeChangeStart', () => {
			setMobileMenu(false);
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

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

				{login && (
					<div className="logged-in">
						<Button primary leftIcon="fas fa-qrcode" href="/scan">
							Scan
						</Button>

						{login.permissions === 'admin' && (
							<Button primary leftIcon="fas fa-cog" className="admin-button" href="/admin">
								Admin
							</Button>
						)}

						<Button onClick={() => dispatch(logout(router))} className="logout-button" noStyle>
							Déconnexion
						</Button>
					</div>
				)}

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
