import axios, { Method, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export default async (method: Method, url: string, data?: object) =>
	new Promise<AxiosResponse>((resolve, reject) => {
		axios
			.request({
				baseURL: process.env.API_URL,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('broadway-token')}`,
				},
				timeout: 5000,
				method,
				url,
				data: data || {},
			})
			.then((res) => resolve(res))
			.catch((err) => {
				toast.error(err.response ? err.response.data.error : 'Une erreur est survenue');
				reject();
			});
	});
