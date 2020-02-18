import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import ReactGA from 'react-ga';
import withRedux from 'next-redux-wrapper';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar';
import { initStore } from '../store';
import '../types';

import './_app.scss';

toast.configure({
	autoClose: 5000,
	pauseOnHover: true,
	hideProgressBar: true,
});

interface AppProps {
	store: Store;
}

class App extends NextApp<AppProps> {
	initialiseGA() {
		if (process.browser) {
			if (process.env.NODE_ENV === 'production') {
				if (!window.GA_INITIALIZED) {
					ReactGA.initialize(process.env.GA_ID || '');
					window.GA_INITIALIZED = true;
				}
				ReactGA.set({ page: window.location.pathname });
				ReactGA.pageview(window.location.pathname);
			}
		}
	}

	render() {
		const { Component, store } = this.props;
		this.initialiseGA();

		return (
			<>
				<Head>
					<title>Broadway UTT</title>

					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" />
				</Head>

				<Provider store={store}>
					<Navbar />

					<main>
						<Component />
					</main>
				</Provider>
			</>
		);
	}
}

export default withRedux(initStore)(App);
