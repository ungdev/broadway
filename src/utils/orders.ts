import api from './api';

export const fetchOrder = async (orderId: string) => {
	try {
		const res = await api('GET', `/orders/${orderId}`);

		return res;
	} catch (err) {
		return false;
	}
};
