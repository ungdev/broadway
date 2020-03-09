import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { State, Ticket } from '../types';
import { proceedPayment } from '../utils/tickets';
import { Title, Info } from '../components/UI';
import TicketsOrder from '../components/TicketsOrder';

import './billetterie.scss';

const Tickets = () => {
	const { paymentEnabled } = useSelector((state: State) => state.items);

	const payCart = async (date: string, tickets: Ticket[], email: string) => {
		const success = await proceedPayment(date || '', tickets, email);

		return {
			reset: false,
			spinner: success,
		};
	};

	return (
		<div id="tickets" className="page-margin">
			<Title>Billetterie</Title>

			<form noValidate onSubmit={(e) => e.preventDefault()} className="content-container">
				<Info title="Billet perdu ?">
					Vous avez perdu votre billet ? Vous pouvez le récupérer par email en{' '}
					<Link href="/billet-perdu">
						<a className="primary-color">cliquant ici</a>
					</Link>
					.
				</Info>

				<Info title="Informations">
					<ul>
						<li>Les informations du premier billet seront utilisées comme coordonnées de facturation.</li>
						<li>L'adresse email vous permettra de recevoir vos billets et de les renvoyer en cas de perte.</li>
						<li>Un justificatif est susceptible de vous être demandé avant la représentation en fonction du tarif.</li>
					</ul>
				</Info>

				{!paymentEnabled ? (
					<div className="payment-disabled">
						<i className="fas fa-clock" /> L'achat de billets est désactivé pour le moment.
					</div>
				) : (
					<TicketsOrder onSubmit={payCart} buttonProps={{ leftIcon: 'fas fa-credit-card', children: 'Payer' }} />
				)}
			</form>
		</div>
	);
};

export default Tickets;
