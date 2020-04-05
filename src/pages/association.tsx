import React from 'react';

import { Title } from '../components/UI';

import './association.scss';

const Association = () => {
	return (
		<>
			<Title>L'association</Title>
			<img src="/images/photo_groupe.jpg" id="photogroupe" alt="Photo de Groupe" />

			<p className="betterPara">
				Broadway UTT est une association fondée en février 2019 dépendante du Bureau de Etudiants de l’UTT. Nous avions
				pour objectif de monter une comédie musicale tout au long de l’année scolaire 2019/2020 afin de se représenter
				les 5 et 6 juin 2020 à l’Espace Argence de la ville de Troyes devant 400 spectateurs par soir. Objectif qui
				comme vous pouvez le voir est sur le point de se réaliser !{' '}
			</p>

			<hr className="betterHr" />
			<p className="betterPara">
				Nous avons choisit d’adapter la comédie musicale « 1789 Les amants de la Bastille » de Dove Attia, Albert Cohen
				et François Chouquet. Notre association compte aujourd’hui une trentaine de membres, qu’ils soient chanteurs,
				acteurs, danseurs ou organisateurs. <br /> Afin de mener à bien ce projet, nous avons formé une équipe
				artistique compétente et 100% étudiante qui a encadré les répétitions de la pièce tout au long de l’année,
				adapté la pièce à notre effectif et à notre goût et enregistré une partie des bandes sons qui composent la
				pièce.{' '}
			</p>

			<hr className="betterHr" />
			<p className="betterPara">
				Au-delà de l’aspect artistique, un vingtaine de membres bénévoles de l’association ont travaillé toute l’année
				sur les aspect financiers, logistiques et organisationnels de l’évènement pour son bon déroulement.{' '}
			</p>
		</>
	);
};

export default Association;
