import React, { useState, useEffect, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Link from 'next/link';

import { State } from '../types';
import { isValidTicket, proceedPayment } from '../utils/tickets';
import { representations } from '../utils/representations';
import { fetchItems } from '../utils/items';
import { Title, Input, Collapse, Button, Radio, Info } from '../components/UI';

import './billetterie.scss';

const defaultTicketValue = {
	firstname: '',
	lastname: '',
	email: '',
	type: '',
};

const Tickets = () => {
	const dispatch = useDispatch();
	const { items, paymentEnabled } = useSelector((state: State) => state.items);
	const [buttonLoading, setButtonLoading] = useState(false);
	const [date, setDate] = useState(null as string | null);
	const [tickets, setTickets] = useState([defaultTicketValue]);

	const addTicket = () => {
		setTickets([...tickets, defaultTicketValue]);
	};

	const deleteTicket = (i: number) => {
		const updatedTickets = tickets.filter((e, j) => j !== i);
		setTickets(updatedTickets);
	};

	const setTicketField = (i: number, field: string, value: string) => {
		const updatedTickets = tickets.slice();
		updatedTickets[i] = {
			...updatedTickets[i],
			[field]: value,
		};

		setTickets(updatedTickets);
	};

	const getTicketName = (ticketId: string) => {
		return items.find((v) => `${v.id}` === ticketId)?.name;
	};

	useEffect(() => {
		dispatch(fetchItems());
	}, [dispatch]);

	const checkInputs = () => {
		let valid = true;

		// Check date
		if (!date) {
			return false;
		}

		// Check tickets
		tickets.forEach((ticket, i) => {
			if (!isValidTicket(ticket, i)) {
				valid = false;
			}
		});

		return valid;
	};

	const payCart = async () => {
		if (buttonLoading) {
			return;
		}

		// Check inputs
		if (!checkInputs()) {
			// Display errors
			toast.error('Veuillez remplir tous les champs correctement');
			return;
		}

		// Proceed with the payment
		setButtonLoading(true);
		if (!(await proceedPayment(date || '', tickets))) {
			setButtonLoading(false);
		}
	};

	let ticketsNode = null as Array<ReactNode> | null;

	if (items.length) {
		const ticketTypes = items.map((item) => ({
			name: `${item.name} (${item.price / 100}€)`,
			value: item.id,
			description: item.description,
		}));

		ticketsNode = tickets.map((ticket, i) => {
			let title = null;
			if (isValidTicket(ticket, i)) {
				title = (
					<>
						{ticket.firstname} {ticket.lastname} <span className="light-text">({getTicketName(ticket.type)})</span>
					</>
				);
			}

			return (
				<Collapse title={title || <span className="light-text">Nouveau billet</span>} noTopMargin key={i}>
					<div className="ticket-name-inputs">
						<Input
							type="text"
							placeholder="Prénom"
							value={ticket.firstname}
							onChange={(v) => setTicketField(i, 'firstname', v)}
						/>
						<Input
							type="text"
							placeholder="Nom"
							value={ticket.lastname}
							onChange={(v) => setTicketField(i, 'lastname', v)}
						/>
					</div>

					{i === 0 && (
						<Input
							type="email"
							placeholder="Email"
							value={ticket.email}
							onChange={(v) => setTicketField(i, 'email', v)}
						/>
					)}

					<Radio
						label="Tarif"
						options={ticketTypes}
						name={`type-${i}`}
						value={ticket.type}
						onChange={(v) => setTicketField(i, 'type', v)}
						className="ticket-type"
					/>

					{i !== 0 && (
						<Button onClick={() => deleteTicket(i)} leftIcon="far fa-trash-alt" className="delete-button">
							Supprimer
						</Button>
					)}
				</Collapse>
			);
		});
	}

	return (
		<div id="tickets" className="page-margin">
			<Title>Billetterie</Title>

			<form
				noValidate
				onSubmit={(e) => {
					payCart();
					e.preventDefault();
				}}
				className="content-container">
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
						<li>Pour les tarifs réduit et cotisant, un justificatif vous sera demandé.</li>
					</ul>
				</Info>

				{!paymentEnabled ? (
					<div className="payment-disabled">
						<i className="fas fa-clock" /> L'achat de billets est désactivé pour le moment.
					</div>
				) : ticketsNode ? (
					<>
						<div className="card">
							<Radio
								label="Date de représentation"
								options={representations}
								name="date"
								value={date}
								onChange={setDate}
							/>
						</div>

						{ticketsNode}

						<Button onClick={addTicket} leftIcon="fas fa-plus" className="add-button">
							Ajouter un billet
						</Button>

						<Button type="submit" primary leftIcon="fas fa-credit-card" className="pay-button" spinner={buttonLoading}>
							Payer
						</Button>
					</>
				) : (
					<div className="loading">
						<i className="fas fa-spinner fa-spin" /> Chargement...
					</div>
				)}
			</form>
		</div>
	);
};

export default Tickets;
