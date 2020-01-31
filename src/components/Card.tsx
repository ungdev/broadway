import React, { ReactNode } from 'react';
import Link from 'next/link';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';

import Button from './Button';
import './Card.scss';

/**
 * Displays a card which can contain an image, a content and a button
 */
const Card = ({ dark, imgSrc, content, buttonContent, onClick, href, target, className, classNameImg }: CardProps) => {
	let button = (
		<Button primary onClick={onClick}>
			{buttonContent}
		</Button>
	);
	if (href) {
		button = href.includes('http') ? (
			<a href={href} target={target} rel="noopener noreferrer">
				{button}
			</a>
		) : (
			<Link href={href}>{button}</Link>
		);
	}

	return (
		<div className={`card ${className} ${dark ? 'dark' : ''}`}>
			{imgSrc && <img className={`lazyload card-image ${classNameImg}`} alt="" data-src={imgSrc} />}
			{content && (
				<>
					<div className="card-content">{content}</div>
					{buttonContent !== '' && <div className="card-button">{button}</div>}
				</>
			)}
		</div>
	);
};

interface CardProps {
	/**
	 * Whether the card should use dark theme or not
	 */
	dark?: boolean;
	/**
	 * Source of the image to display above
	 */
	imgSrc?: string;
	/**
	 * Content of the card
	 */
	content?: ReactNode;
	/**
	 * Content of the button
	 */
	buttonContent?: ReactNode;
	/**
	 * Function called when the user clicks on the button
	 */
	onClick?: () => void;
	/**
	 * Link URL surrounding the button
	 */
	href?: string;
	/**
	 * Target for the link
	 */
	target?: string;
	/**
	 * Class of the card
	 */
	className?: string;
	/**
	 * Class of the image
	 */
	classNameImg?: string;
}

export default Card;
