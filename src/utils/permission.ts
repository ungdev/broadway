import { NextRouter } from 'next/router';
import { toast } from 'react-toastify';

import { Login } from '../types';

export const checkPermission = (permission: string, login: Login, router: NextRouter, next?: string) => {
	if (!login) {
		if (next) {
			router.replace(`/login?next=${next}`);
		} else {
			router.replace(`/login`);
		}
	} else if (login.permissions !== permission && login.permissions !== 'admin') {
		toast.error('Vous ne pouvez pas accéder à cette page');
		router.replace('/');
	}
};
