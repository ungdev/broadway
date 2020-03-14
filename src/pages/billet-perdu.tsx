import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { sendTicket as _sendTicket } from '../utils/tickets';
import { Title, Input, Button, Info } from '../components/UI';
import isEmail from '../utils/isEmail';

import './billet-perdu.scss';

const LostTicket = () => {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const sendTicket = async () => {
		if (!isEmail(email)) {
			toast.error("L'adresse email n'est pas valide");
			return;
		}

		setLoading(true);

		await _sendTicket(email);

		setEmail('');
		setLoading(false);
	};

	return (
		<div id="lost-ticket">
			<Title>Billet perdu</Title>

			<div className="content-container">
				<Info title="Vous avez perdu votre billet ?">
					Vous pouvez le récupérer en indiquant l'adresse email utilisée lors de l'achat. Nous vous le renverrons par
					email.
				</Info>

				<form
					noValidate
					onSubmit={(e) => {
						e.preventDefault();
						sendTicket();
					}}
					className="form-container">
					<Input type="email" placeholder="Email" value={email} onChange={setEmail} />

					<Button primary type="submit" leftIcon="fas fa-paper-plane" spinner={loading} className="send-button">
						Envoyer
					</Button>
				</form>
			</div>
		</div>
	);
};

export default LostTicket;
