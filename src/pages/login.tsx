import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Title, Input, Button, Info } from '../components/UI';
import { login } from '../utils/login';

import './login.scss';

const Login = () => {
	const router = useRouter();
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const next = router.query.next as string;

	const tryRedirect = () => {
		if (localStorage.getItem('broadway-token')) {
			let redirect = localStorage.getItem('broadway-permissions');

			if (next) {
				redirect = next;
			}

			router.replace(`/${redirect}`);
		}
	};

	useEffect(() => {
		tryRedirect();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const tryLogin = async () => {
		setLoading(true);

		if (await login(password)) {
			tryRedirect();
		} else {
			setLoading(false);
		}
	};

	return (
		<div id="login">
			<Title>Connexion</Title>

			<div className="content-container">
				{next && <Info title="Vous devez vous authentifier pour accéder à cette page" />}

				<form
					noValidate
					onSubmit={(e) => {
						e.preventDefault();
						tryLogin();
					}}>
					<Input type="password" value={password} onChange={setPassword} placeholder="Mot de passe" />

					<Button primary type="submit" leftIcon="fas fa-sign-in-alt" className="login-button" spinner={loading}>
						Se connecter
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
