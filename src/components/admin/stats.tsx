import React from 'react';

import './stats.scss';

const AdminStats = () => {
	return (
		<div id="admin-stats">
			<a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">
				Google Analytics
				<div className="light-text">Statistiques de visite du site (temps réel, audience, ...)</div>
			</a>
			<a href="https://grafana.uttnetgroup.fr" target="_blank" rel="noopener noreferrer">
				Grafana
				<div className="light-text">Statistiques de vente de la billetterie</div>
			</a>
		</div>
	);
};

export default AdminStats;
