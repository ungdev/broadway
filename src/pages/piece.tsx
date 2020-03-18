import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { SubTitle } from '../components/UI';

import './piece.scss';

// 14 images total
const images = ['/images/photo.png', '/images/photo.png', '/images/photo.png', '/images/photo.png'];

const Play = () => {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div id="pieceDiv" className="page-margin">
			<img src="/images/1789-lowQ.png" id="logo1789" alt="1789 Les Amants de la Bastille" />

			{isOpen && (
				<Lightbox
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
					onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
				/>
			)}

			<SubTitle>La pièce</SubTitle>
			<p className="betterPara">
				1789 Les amants de la Bastille est une comédie musicale française écrite par Dove Attia, Albert Cohen et
				François Chouquet. Cette comédie musicale met en scène deux amants dont l’amour est impossible, lui
				révolutionnaire et elle gouvernante des enfants de Marie-Antoinette. Tout au long de la pièce cet amour prend
				forme entre les fastes de la cour Versaillaise et la misère qui règne dans les rues de Paris. A Versailles, on
				se préoccupe peu des souffrances du peuple : la Reine cherche à tout prix à se divertir en accumulant les
				amants, bien loin des problèmes du Roi qui tente de calmer la fureur du peuple français. Pendant ce temps, Ronan
				un jeune paysan se voit obliger de monter sur Paris avec sa sœur Solène pour tenter de survivre et fait la
				rencontre de Camille Desmoulins, un révolutionnaire convaincu et engagé. L’amour naissant saura-t-il survivre à
				leurs divergences dans ce contexte de tensions extrême?{' '}
			</p>
			<br />

			<SubTitle>Les personnages</SubTitle>

			<table id="personnages">
				<tr>
					<td>
						<div className="text">
							<h2>Olympe et Ronan</h2>
							<p className="betterPara">
								Olympe est la gouvernante des enfants de la famille royale française, Ronan quant à lui est un jeune
								paysans révolutionnaire. Elle, est la sagesse et la tempérance, lui, la fougue et la hargne. Aussi
								éloignés qu’ils puissent paraître, leur rencontre accidentelle va changer leurs vies et les plonger dans
								une histoire d’amour interdite et passionnelle.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(0);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Camille Desmoulins</h2>
							<p className="betterPara">
								Avocat et révolutionnaire, Desmoulins est un des piliers de la révolution française. Avec ses amis
								Danton, Robespierre et Marat, il va écrire le premier journal révolutionnaire et tenter de mettre le feu
								au poudre.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(1);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Marie-Antoinette</h2>
							<p className="betterPara">
								Reine de France et épouse du roi Louis XVI, l’autrichienne mène une vie luxueuse à Versailles
								multipliant les liaisons et amants, accompagnée de sa suivante et confidente : Yolande De Polignac
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(2);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Solène</h2>
							<p className="betterPara">
								Sœur de Ronan, Solène est une femme fougueuse au cœur brulant de haine face aux injustices que les
								femmes des rues de Paris subissent. Forcée de vendre son corp pour survivre, elle n’a de cesse de se
								battre pour ses droits et ceux de ses compatriotes.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(3);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Le Comte d'Artois</h2>
							<p className="betterPara">
								Frère du Roi de France, le comte d’Artois est un homme impitoyable qui met tout en œuvre pour étouffer
								l’embrasement de la révolution. Influent auprès du roi, il tire les ficelles du pouvoir royal à
								Versailles.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(4);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Charlotte</h2>
							<p className="betterPara">
								Gamine des rues connue de tous, Charlotte est la petite mascotte des révolutionnaires et elle n‘hésite
								pas à rallier le peuple à leur cause. Grâce à sa connaissance de tous les recoins de Paris et ses
								relations dans les deux camps, la petite Gavroche aide nos deux protagonistes à vivre leur histoire
								d’amour en secret.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(5);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Georges Danton</h2>
							<p className="betterPara">
								Révolutionnaire éloquent, Danton est avant tout un homme qui aime la vie, les femmes et le vin. Il se
								dédie corps et âme à la cause et n’hésite pas à prendre les armes le moment venu.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(6);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Maximilien de Robespierre</h2>
							<p className="betterPara">
								Avocat et homme politique brillant, Robespierre est une figure marquante de la révolution. Prêt à tout
								pour défendre les droits du peuple, il n’hésite pas à se dresser contre la monarchie.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(7);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Louis XVI</h2>
							<p className="betterPara">
								Roi de France, Louis XVI se retrouve malgré lui face à la colère du peuple. Tiraillé entre les conseils
								de son ministre des finances Necker et ceux de son frère le Comte d’Artois, il devra prendre des mesures
								radicales pour écraser la révolution naissante.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(8);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Auguste Ramard</h2>
							<p className="betterPara">
								Homme de main du Comte d’Artois, il fait partie de la police royale. Entre sa haine pour les
								révolutionnaires et son admiration pour la jeune Olympe, Ramard veux à tout prix appartenir à
								l’aristocratie française avec l’aide de ses deux mouchards.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(9);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Necker</h2>
							<p className="betterPara">
								Ministres des finances du Roi, Necker est un homme sage convaincu que l’abolition des privilèges et la
								répartition des impôts calmeront les ardeurs et les réclamations du peuple français.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(10);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Le Comte Lazard de Peyrol</h2>
							<p className="betterPara">
								Chef des armées du Roi, le comte de Peyrol est un homme au cœur de pierre qui met tout en œuvre pour
								réprimer par la force les soulèvements des révolutionnaires à Paris.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(11);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Honoré-Gabriel Riqueti De Mirabeau</h2>
							<p className="betterPara">
								Mirabeau est un écrivain et député membre du parti du Tiers-Etat. Bien que membre de la noblesse, il
								galvanise les foules grâce à son éloquence rare qu’il met au service de la révolution.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(12);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<div className="text">
							<h2>Yolande de Polignac</h2>
							<p className="betterPara">
								Confidente et amie de la reine, elle lui arrange des rendez-vous secrets avec ses amants et la soutient
								en ces temps difficiles pour la couronne.
							</p>
						</div>
						<img
							src="/images/photo.png"
							onClick={() => {
								setPhotoIndex(13);
								setIsOpen(true);
							}}
							alt="Photo a venir"
						/>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default Play;
