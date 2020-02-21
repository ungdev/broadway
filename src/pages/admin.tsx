import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { checkPermission, hasPermission } from '../utils/permission';
import { Title, Button } from '../components/UI';
import { State } from '../types';
import AdminTickets from '../components/admin/tickets';
import AdminEmails from '../components/admin/email';
import AdminStats from '../components/admin/stats';
import Loader from '../components/Loader';

import './admin.scss';

const Admin = () => {
	const router = useRouter();
	const login = useSelector((state: State) => state.login);
	const [tab, setTab] = useState('');

	useEffect(() => {
		checkPermission('admin', login, router, '/admin');
	}, [router, login]);

	return (
		<div id="admin" className="page-margin">
			<Title>Panneau d'administration</Title>

			<div className="content-container">
				{hasPermission('admin', login) ? (
					<>
						<div className="admin-menu">
							<Button
								primary
								leftIcon="fas fa-ticket-alt"
								onClick={() => setTab('tickets')}
								className={tab === 'tickets' ? 'active' : ''}>
								Création de billets
							</Button>
							<Button
								primary
								leftIcon="fas fa-at"
								onClick={() => setTab('emails')}
								className={tab === 'emails' ? 'active' : ''}>
								Emails d'information
							</Button>
							<Button
								primary
								leftIcon="fas fa-chart-bar"
								onClick={() => setTab('stats')}
								className={tab === 'stats' ? 'active' : ''}>
								Statistiques
							</Button>
						</div>

						<div className="admin-content">
							{tab === 'tickets' && <AdminTickets />}
							{tab === 'emails' && <AdminEmails />}
							{tab === 'stats' && <AdminStats />}
						</div>
					</>
				) : (
					<Loader />
				)}
			</div>
		</div>
	);
};

export default Admin;
