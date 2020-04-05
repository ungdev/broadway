import { toast } from 'react-toastify';
import { NextRouter } from 'next/router';

import api from './api';
import { setLogin } from '../reducers/login';
import { Dispatch } from '../types';

const permissionPages = ['/scan', '/admin'];

export const login = (password: string) => async (dispatch: Dispatch) => {
	try {
		const res = await api('POST', '/auth/login', {
			password,
		});

		localStorage.setItem('broadway-token', res.data.token);
		localStorage.setItem('broadway-permissions', res.data.permissions);

		dispatch(setLogin(res.data));

		return true;
	} catch (err) {
		return false;
	}
};

export const autoLogin = () => async (dispatch: Dispatch) => {
	const token = localStorage.getItem('broadway-token');
	const permissions = localStorage.getItem('broadway-permissions');

	if (token && permissions) {
		dispatch(setLogin({ token, permissions }));

		// Check if the token is valid
		try {
			await api('GET', '/auth/check', {}, false);
		} catch (err) {
			localStorage.removeItem('broadway-token');
			localStorage.removeItem('broadway-permissions');

			dispatch(setLogin(false));
		}
	} else {
		dispatch(setLogin(false));
	}
};

export const logout = (router: NextRouter) => async (dispatch: Dispatch) => {
	localStorage.removeItem('broadway-token');
	localStorage.removeItem('broadway-permissions');

	if (permissionPages.includes(router.asPath)) {
		await router.replace('/');
	}

	dispatch(setLogin(false));

	toast.success('Vous avez été déconnecté');
};
