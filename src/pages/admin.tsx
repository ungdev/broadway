import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Title } from '../components/UI';

const Admin = () => {
	const router = useRouter();

	useEffect(() => {
		// Redirect to login page if not logged in
		if (!localStorage.getItem('broadway-token')) {
			router.replace('/login?next=admin');
		}
	}, [router]);

	return (
		<div id="admin">
			<Title>Panel administrateur</Title>
		</div>
	);
};

export default Admin;
