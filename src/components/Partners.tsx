import React, { useState, useEffect } from 'react';

import './Partners.scss';

const Partners = () => {
	const [partners, setPartners] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const partnersList = [
			{
				url: 'https://www-fondation.utt.fr/',
				name: 'Fondation UTT',
				image: 'fondation_utt.jpg',
			},
			{
				url: 'https://bde.utt.fr/fr',
				name: 'BDE UTT',
				image: 'bde_utt.jpg',
			},
			{
				url: 'https://www.tencymusic.fr/',
				name: 'Tency Music',
				image: 'tency.png',
			},
			{
				url: 'https://www.versionkaraoke.fr/',
				name: 'Version Karaoké',
				image: 'version.png',
			},
			{
				url: 'https://www.jcdecaux.fr/',
				name: 'JCDecaux',
				image: 'decaux.png',
			},
		];

		const partnersHtml = partnersList.map((partner, i) => (
			<a href={partner.url} target="_blank" rel="noopener noreferrer" className="partner-link" key={i}>
				<div className="partner" data-name={partner.name}>
					<div className="partner-image">
						<img src={`/images/${partner.image}`} alt={partner.name} />
					</div>
				</div>
			</a>
		));

		setPartners(partnersHtml);
	}, []);

	return (
		<div id="partners">
			<div className="partners-list">{partners}</div>
		</div>
	);
};

export default Partners;
