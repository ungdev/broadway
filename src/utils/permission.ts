import { NextRouter } from 'next/router';
import { toast } from 'react-toastify';

import { Login } from '../types';

export const checkPermission = (permission: string, login: Login, router: NextRouter) => {
	if (!login) {
		router.replace(`/login?next=${permission}`);
	} else if (login.permissions !== permission && login.permissions !== 'admin') {
		toast.error("Vous n'avez pas la permission nécessaire");
		router.replace('/');
	}
};
