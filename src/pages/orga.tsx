import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Title } from '../components/UI';

const Orga = () => {
	const router = useRouter();

	useEffect(() => {
		// Check if logged in
		if (!localStorage.getItem('broadway-token')) {
			router.replace('/login?next=orga');
		}
	}, [router]);

	return (
		<div id="orga">
			<Title>Panel organisateur</Title>
		</div>
	);
};

export default Orga;
