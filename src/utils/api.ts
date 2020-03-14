import axios, { Method, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export default async (method: Method, url: string, data = {}, displayError = true) =>
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
				data,
			})
			.then((res) => resolve(res))
			.catch((err) => {
				if (displayError) {
					toast.error(err.response ? err.response.data.error : 'Une erreur est survenue');
				}

				reject();
			});
	});
