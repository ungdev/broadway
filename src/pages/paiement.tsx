import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '../components/UI';

import './paiement.scss';

const Paiement = () => {
	const status = useRouter().query.status;

	return (
		<div id="payment" className="page-margin">
			<div className="status">
				{status === 'success' ? (
					<>
						<i className="fas fa-check-circle success-icon" />
						Votre commande a bien été validée
						<div className="more-info">
							Vous avez reçu votre billet par email.
							<br />
							Vous devrez le présenter imprimé ou sur smartphone avant la représentation.
						</div>
					</>
				) : status === 'error' ? (
					<>
						<i className="far fa-times-circle error-icon" />
						Erreur lors de la commande
						<div className="more-info">
							Si vous souhaitez en savoir plus, vous pouvez{' '}
							<Link href="/informations#contact">
								<a className="primary-color">nous contacter</a>
							</Link>
							.
						</div>
					</>
				) : (
					<>
						<i className="far fa-question-circle invalid-icon" />
						Syntaxe de la requête erronée
					</>
				)}
			</div>

			<Button primary href="/" leftIcon="fas fa-arrow-left" className="back-button">
				Retour à l'accueil
			</Button>
		</div>
	);
};

export default Paiement;
