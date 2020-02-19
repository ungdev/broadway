import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Title, Input, Button, Info } from '../components/UI';
import { login } from '../utils/login';
import { State } from '../types';

import './login.scss';

const Login = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const isLoggedIn = useSelector((state: State) => state.login !== false);
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const next = router.query.next as string;

	const tryRedirect = () => {
		if (isLoggedIn) {
			if (next) {
				router.replace(next);
			} else {
				router.replace('/');
			}
		}
	};

	useEffect(() => {
		tryRedirect();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const tryLogin = async () => {
		setLoading(true);

		if (await dispatch(login(password))) {
			tryRedirect();
		} else {
			setLoading(false);
		}
	};

	return (
		<div id="login" className="page-margin">
			<Title>Connexion</Title>

			<div className="content-container">
				{next && <Info title="Vous devez vous authentifier pour accéder à cette page" />}

				<form
					noValidate
					onSubmit={(e) => {
						e.preventDefault();
						tryLogin();
					}}>
					<Input type="password" value={password} onChange={setPassword} placeholder="Mot de passe" autoFocus />

					<Button primary type="submit" leftIcon="fas fa-sign-in-alt" className="login-button" spinner={loading}>
						Se connecter
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
