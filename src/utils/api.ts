import axios, { Method } from 'axios';

const api = async (method: Method, url: string, data?: object) =>
	await axios.request({
		baseURL: process.env.API_URL,
		headers: { 'Content-Type': 'application/json' },
		method,
		url,
		data: data || {},
		timeout: 5000,
	});

export default api;
