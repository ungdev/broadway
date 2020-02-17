import axios, { Method, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const api = async (method: Method, url: string, data?: object) =>
	new Promise<AxiosResponse>((resolve, reject) => {
		axios
			.request({
				baseURL: process.env.API_URL,
				headers: { 'Content-Type': 'application/json' },
				method,
				url,
				data: data || {},
				timeout: 5000,
			})
			.then((res) => resolve(res))
			.catch((err) => {
				toast.error(err.response ? err.response.data.error : 'Une erreur est survenue');
				reject();
			});
	});

export default api;
