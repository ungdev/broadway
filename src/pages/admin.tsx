import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { Title } from '../components/UI';
import { State } from '../types';

const Admin = () => {
	const router = useRouter();
	const login = useSelector((state: State) => state.login);

	useEffect(() => {
		if (!login) {
			router.replace('/login?next=admin');
		} else if (login.permissions !== 'admin') {
			toast.error("Vous n'avez pas la permission nécessaire");
			router.replace('/');
		}
	}, [router, login]);

	return (
		<div id="admin">
			<Title>Panel administrateur</Title>
		</div>
	);
};

export default Admin;
