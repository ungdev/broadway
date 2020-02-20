import React from 'react';
import { toast } from 'react-toastify';

import TicketsOrder from '../TicketsOrder';
import { Ticket } from '../../types';
import { proceedPayment } from '../../utils/tickets';

const AdminTickets = () => {
	const createTicket = async (date: string, tickets: Ticket[], email: string) => {
		const success = await proceedPayment(date, tickets, email, true);

		if (success) {
			toast.success('Les billets ont bien été envoyés');
		}

		return {
			reset: success,
			spinner: false,
		};
	};

	return (
		<div id="admin-tickets">
			<TicketsOrder
				onSubmit={createTicket}
				buttonProps={{
					leftIcon: 'fas fa-paper-plane',
					children: 'Envoyer les billets',
				}}
			/>
		</div>
	);
};

export default AdminTickets;
