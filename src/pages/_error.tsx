import React from 'react';

import { Title, Button } from '../components/UI';

const Error = () => (
	<div id="error">
		<Title>Erreur</Title>

		<div className="content-container">
			Une erreur est survenue... Veuillez nous excuser pour la gêne occasionnée.
			<Button primary leftIcon="fas fa-arrow-left" href="/">
				Retourner à l'accueil
			</Button>
		</div>
	</div>
);

export default Error;
