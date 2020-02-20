import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { fetchItems } from '../utils/items';
import { isValidTicket } from '../utils/tickets';
import { representations } from '../utils/representations';
import { Collapse, Input, Radio, Button } from './UI';
import { Ticket, State } from '../types';

import './TicketsOrder.scss';

const defaultTicketValue = {
	firstname: '',
	lastname: '',
	type: '',
};

const TicketsOrder = ({ onSubmit, buttonProps }: TicketsOrderProps) => {
	const dispatch = useDispatch();
	const { items } = useSelector((state: State) => state.items);
	const [buttonLoading, setButtonLoading] = useState(false);
	const [date, setDate] = useState(null as string | null);
	const [tickets, setTickets] = useState([defaultTicketValue]);
	const [emails, setEmails] = useState(['', '']);

	useEffect(() => {
		dispatch(fetchItems());
	}, [dispatch]);

	const checkInputs = () => {
		let valid = true;

		// Check date
		if (!date) {
			toast.error('Veuillez choisir une date');
			return false;
		}

		// Check tickets
		tickets.forEach((ticket, i) => {
			if (!isValidTicket(ticket, i, emails, true)) {
				valid = false;
			}
		});

		return valid;
	};

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

	const ticketTypes = items.map((item) => ({
		name: `${item.name} (${item.price / 100}€)`,
		value: item.id,
		description: item.description,
	}));

	const ticketsNode = tickets.map((ticket, i) => {
		let title = null;
		if (isValidTicket(ticket, i, emails, false)) {
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
					<>
						<Input type="email" placeholder="Email" value={emails[0]} onChange={(v) => setEmails([v, emails[1]])} />
						<Input
							type="email"
							placeholder="Confirmez l'email"
							value={emails[1]}
							onChange={(v) => setEmails([emails[0], v])}
						/>
					</>
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

	return (
		<div className="tickets-order">
			{items.length ? (
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

					<Button
						{...buttonProps}
						type="submit"
						primary
						spinner={buttonLoading}
						onClick={async () => {
							if (!checkInputs()) {
								return;
							}

							setButtonLoading(true);

							const submitResult = await onSubmit(date || '', tickets, emails[0]);

							if (!submitResult.spinner) {
								setButtonLoading(false);
							}

							if (submitResult.reset) {
								setDate(null);
								setEmails(['', '']);
								setTickets([defaultTicketValue]);
							}
						}}
						className="submit-button"
					/>
				</>
			) : (
				<div className="loading">
					<i className="fas fa-spinner fa-spin" /> Chargement...
				</div>
			)}
		</div>
	);
};

interface TicketsOrderReturn {
	/**
	 * Should all the input fields be reset ?
	 */
	reset: boolean;

	/**
	 * Should the spinner be displayed ?
	 */
	spinner: boolean;
}

interface TicketsOrderProps {
	/**
	 * Triggered when the user clicks on the submit button, after checking that all the inputs are correct.
	 * The return value indicate if the input fields should be reset and if the spinner should be displayed
	 */
	onSubmit: (date: string, tickets: Ticket[], email: string) => Promise<TicketsOrderReturn>;

	/**
	 * Props to pass to the submit button
	 */
	buttonProps: Record<string, string>;
}

export default TicketsOrder;
