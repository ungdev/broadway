import { NextRouter } from 'next/router';
import { toast } from 'react-toastify';

import { Login } from '../types';

export const hasPermission = (permission: string, login: Login) => {
	if (login && (login.permissions === permission || login.permissions === 'admin')) {
		return true;
	}

	return false;
};

export const checkPermission = (permission: string, login: Login, router: NextRouter, next?: string) => {
	if (login === null) {
		return;
	}

	if (login === false) {
		if (next) {
			router.replace(`/login?next=${next}`);
		} else {
			router.replace(`/login`);
		}
	} else if (!hasPermission(permission, login)) {
		toast.error('Vous ne pouvez pas accéder à cette page');
		router.replace('/');
	}
};
