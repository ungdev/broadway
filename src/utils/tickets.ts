import api from './api';
import { Ticket } from '../types';
import isEmail from './isEmail';
import { toast } from 'react-toastify';

export const isValidTicket = (ticket: Ticket, index: number, emails: Array<string>, displayError: boolean) => {
	let error = '';

	if (!ticket.firstname.trim()) {
		error = `Veuillez remplir le prénom du billet n°${index + 1}`;
	} else if (!ticket.lastname.trim()) {
		error = `Veuillez remplir le nom du billet n°${index + 1}`;
	} else if (!ticket.type) {
		error = `Veuillez sélectionner le tarif du billet n°${index + 1}`;
	} else if (index === 0) {
		if (!isEmail(emails[0])) {
			error = 'Veuillez fournir une adresse email valide';
		} else if (!isEmail(emails[1])) {
			error = 'Veuillez confirmer votre adresse email';
		} else if (emails[0] !== emails[1]) {
			error = 'Les deux adresses email ne correspondent pas';
		}
	}

	if (error) {
		if (displayError) {
			toast.error(error);
		}

		return false;
	}

	return true;
};

export const proceedPayment = async (date: string, tickets: Array<Ticket>, email: string, forcePay = false) => {
	try {
		// Send order to API
		const res = await api('POST', `/orders${forcePay ? '/forcePay' : ''}`, {
			firstname: tickets[0].firstname,
			lastname: tickets[0].lastname,
			email,
			representation: parseInt(date, 10),
			users: tickets.map((ticket) => ({
				firstname: ticket.firstname,
				lastname: ticket.lastname,
				itemId: parseInt(ticket.type, 10),
			})),
		});

		if (!forcePay) {
			// Redirect to etupay to proceed with the payment
			window.location = res.data.url;
		}

		return true;
	} catch (err) {
		return false;
	}
};

export const sendTicket = async (email: string) => {
	try {
		await api('GET', '/lostTicket', {
			email,
		});

		toast.success('Votre billet a été envoyé par email');
	} catch (err) {
		toast.error("Erreur lors de l'envoi de l'email");
	}
};
