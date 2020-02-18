import api from './api';

export const login = async (password: string) => {
	try {
		const res = await api('POST', '/auth/login', {
			password,
		});

		localStorage.setItem('broadway-token', res.data.token);
		localStorage.setItem('broadway-permissions', res.data.permissions);

		return true;
	} catch (err) {
		return false;
	}
};
