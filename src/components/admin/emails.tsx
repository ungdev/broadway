import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Input, Textarea, Button, Info } from '../UI';
import { sendEmail } from '../../utils/users';

import './emails.scss';

const AdminEmails = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [loading, setLoading] = useState(false);

	const submit = async () => {
		if (!title.trim() || !content.trim()) {
			toast.error('Veuillez renseigner tous les champs');
			return;
		}

		setLoading(true);

		await sendEmail(title, content);

		setTitle('');
		setContent('');
		setLoading(false);
	};

	return (
		<div id="admin-emails" className="page-padding">
			<Info title="Attention !" className="warning-info">
				Vous allez envoyer un email à toutes les personnes ayant acheté un billet sur le site.
				<br />
				Soyez bien sûr de ce que vous faites pour éviter le spam.
			</Info>

			<form
				noValidate
				onSubmit={(e) => {
					e.preventDefault();

					if (!loading) {
						submit();
					}
				}}
				className="form-container">
				<Input value={title} onChange={setTitle} placeholder="Titre" />
				<Textarea value={content} onChange={setContent} placeholder="Contenu" />

				<div className="form-footer">
					<Button primary type="submit" leftIcon="fas fa-paper-plane" spinner={loading}>
						Envoyer
					</Button>
				</div>
			</form>
		</div>
	);
};

export default AdminEmails;
