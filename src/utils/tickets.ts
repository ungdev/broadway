import api from './api';
import { Ticket } from '../types';
import isEmail from './isEmail';

export const isValidTicket = (ticket: Ticket, index: number) => {
	return (
		ticket.firstname.trim() && ticket.lastname.trim() && ticket.type && (index === 0 ? isEmail(ticket.email) : true)
	);
};

export const proceedPayment = async (date: string, tickets: Array<Ticket>) => {
	try {
		// Send order to API
		const res = await api('POST', '/orders', {
			firstname: tickets[0].firstname,
			lastname: tickets[0].lastname,
			email: tickets[0].email,
			representation: parseInt(date, 10),
			users: tickets.map((ticket) => ({
				firstname: ticket.firstname,
				lastname: ticket.lastname,
				itemId: parseInt(ticket.type, 10),
			})),
		});

		// Redirect to etupay to proceed with the payment
		window.location = res.data.url;

		return true;
	} catch (err) {
		return false;
	}
};
