import React, { useState } from 'react';

import './Partners.scss';

const Partners = () => {
	const [partners, setPartners] = useState([]);

	const fetchPartners = () => {
		const partnersList = [
			{
				url: 'a',
				name: 'a',
				image: 'a',
			},
			{
				url: 'b',
				name: 'b',
				image: 'b',
			},
		];

		const partnersHtml = partnersList.map((partner, i) => (
			<a href={partner.url} className="partner-link" key={i}>
				<div className="partner" data-name={partner.name}>
					<div className="partner-image">
						<img src={`${process.env.REACT_APP_API}${partner.image}`} alt={partner.name} />
					</div>
				</div>
			</a>
		));

		setPartners(partnersHtml);
	};

	fetchPartners();

	return (
		<div className="page-container" id="partners">
			<h1 className="centered">Partenaires</h1>
			<hr />

			{partners && partners.length ? (
				<div className="partners-list">{partners}</div>
			) : (
				<div className="partners-loader">
					<i className="fas fa-spinner fa-spin"></i>
				</div>
			)}
		</div>
	);
};

export default Partners;
