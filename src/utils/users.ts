import { toast } from 'react-toastify';

import api from './api';

export const scanUsers = async (ids: string[]) => {
	await Promise.all(ids.map(async (id) => await api('PATCH', `/users/${id}`)));
};

export const sendEmail = async (title: string, content: string) => {
	try {
		await api('POST', '/users/email', {
			title,
			content,
		});

		toast.success("L'email a bien été envoyé à tous les spectateurs");
	} catch (err) {}
};
