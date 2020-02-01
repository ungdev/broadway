import React from 'react';
import NextApp, { AppContext } from 'next/app';
import ReactGA from 'react-ga';
import withRedux from 'next-redux-wrapper';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { initStore } from '../store';
import '../types';

import Navbar from '../components/Navbar';

import './_app.scss';

toast.configure({
	autoClose: 3000,
	pauseOnHover: true,
	transition: Flip,
	hideProgressBar: true,
});

interface AppProps {
	store: Store;
}

class App extends NextApp<AppProps> {
	static async getInitialProps({ Component, ctx }: AppContext) {
		return {
			pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
		};
	}

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
		const { Component, pageProps, store } = this.props;
		this.initialiseGA();
		return (
			<Provider store={store}>
				<Navbar />

				<div id="page-content">
					<Component {...pageProps} />
				</div>
			</Provider>
		);
	}
}

export default withRedux(initStore)(App);
