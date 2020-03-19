import React from 'react';

import { SubTitle } from '../components/UI';

import './informations.scss';

const Informations = () => {
	return (
		<div className="topDivInfo">
			<SubTitle>Infos pratiques</SubTitle>

			<table id="infosTable">
				<tr>
					<td id="infosTableTd">
						<div className="text">
							<h2>Accès à la Salle</h2>
							<table id="acces">
								<tr>
									<td>
										<img src="/images/mapicon1.png" alt="mapicon" />
									</td>
									<td>
										<p>
											20 Bis boulevard Gambetta,
											<br /> 10000 Troyes
										</p>
									</td>
								</tr>
								<tr>
									<td>
										<img src="/images/mapicon2.png" alt="mapicon" />
									</td>
									<td>
										<p>
											05/06/2020 à 20h00
											<br />
											06/06/2020 à 18h00
										</p>
									</td>
								</tr>
							</table>
						</div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.1649069168443!2d4.070424215320279!3d48.29967974783623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee98f622c62991%3A0x3e5c86ce841224eb!2sEspace%20Argence!5e0!3m2!1sfr!2sfr!4v1584541467215!5m2!1sfr!2sfr"
							frameBorder="1"
							allowFullScreen={true}
							aria-hidden="false"></iframe>
					</td>
				</tr>
				<tr>
					<td>
						<div id="contact">
							<h2>Nous contacter</h2>
						</div>
					</td>
				</tr>
			</table>
		</div>
	);
};
export default Informations;
