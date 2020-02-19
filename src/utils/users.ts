import api from './api';

export const scanUsers = async (ids: string[]) => {
	await Promise.all(ids.map(async (id) => await api('PATCH', `/users/${id}`)));
};
