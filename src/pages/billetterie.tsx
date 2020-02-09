import React, { useState } from 'react';

import playDates from '../utils/playDates';
import { Title, Input, Collapse, Button, Radio } from '../components/UI';

import './billetterie.scss';

const defaultTicketValue = {
	firstname: '',
	lastname: '',
	email: '',
	type: '',
};

const types = [
	{
		name: 'Plein tarif (14€)',
		value: 'full',
	},
	{
		name: 'Tarif réduit (10€)',
		description: '(Moins de 18 ans ou étudiant)',
		value: 'reduced',
	},
	{
		name: 'Tarif cotisant (8€)',
		description: '(Moins de 12 ans ou cotisant BDE UTT)',
		value: 'contributor',
	},
];

const typeToString = (typeValue: string) => {
	const type = types.find((t) => t.value === typeValue);
	return type ? type.name.substring(0, type.name.lastIndexOf(' (')) : '';
};

const Tickets = () => {
	const [step, setStep] = useState(0);
	const [date, setDate] = useState('');
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

	const ticketsNode = tickets.map((ticket, i) => {
		let title = null;
		if (ticket.firstname && ticket.lastname && ticket.type) {
			title = `${ticket.firstname} ${ticket.lastname} (${typeToString(ticket.type)})`;
		}

		return (
			<Collapse title={title || <span className="new-ticket">Nouveau billet</span>} noTopMargin key={i}>
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
					options={types}
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
		<div id="tickets">
			<Title>Billetterie</Title>

			<form
				noValidate
				onSubmit={(e) => {
					console.log('pay');
					e.preventDefault();
				}}
				className="content-container">
				<div className="info">
					<div className="info-title">
						<i className="fas fa-info-circle info-icon" /> Informations
					</div>

					<ul>
						<li> Les informations du premier billet seront utilisées comme coordonnées de facturation.</li>
						<li>L'adresse email vous permettra de recevoir vos billets et de les renvoyer en cas de perte.</li>
						<li>Pour les tarifs réduit et cotisant, un justificatif vous sera demandé.</li>
					</ul>
				</div>

				<div className="card">
					<Radio label="Date de représentation" options={playDates} name="date" value={date} onChange={setDate} />
				</div>

				{ticketsNode}

				<Button onClick={addTicket} leftIcon="fas fa-plus" className="add-button">
					Ajouter un billet
				</Button>

				<Button type="submit" primary leftIcon="fas fa-credit-card" className="pay-button">
					Payer
				</Button>
			</form>
		</div>
	);
};

export default Tickets;
