import React, { ReactNode } from 'react';
import Link from 'next/link';

import './Button.scss';

/**
 * Displays a button that triggers an action when clicked
 */
const Button = ({
	primary,
	href,
	onClick,
	children,
	type,
	leftIcon,
	rightIcon,
	spinner,
	disabled,
	noStyle,
	className,
}: ButtonProps) => {
	const button = (
		<button
			type={type || 'button'}
			className={`button ${className || ''}
				${primary ? 'primary' : ''} ${noStyle ? 'no-style' : ''}
				${!children ? 'empty' : ''} ${spinner ? 'spinner' : ''}`}
			onClick={onClick}
			disabled={disabled}>
			{leftIcon && <i className={`button-icon-left ${leftIcon}`} />}
			{children}
			{rightIcon && <i className={`button-icon-right ${rightIcon}`} />}
		</button>
	);

	return (
		<>
			{href ? (
				href.substring(0, 7) === 'http://' || href.substring(0, 8) === 'https://' ? (
					<a href={href}>{button}</a>
				) : (
					<Link href={href}>
						<a>{button}</a>
					</Link>
				)
			) : (
				button
			)}
		</>
	);
};

interface ButtonProps {
	/**
	 * Whether the button is a primary button or not
	 */
	primary?: boolean;

	/**
	 * Link destination
	 */
	href?: string;

	/**
	 * Function called when the user clicks on the button
	 */
	onClick?: () => void;

	/**
	 * Button content
	 */
	children?: ReactNode;

	/**
	 * Type button
	 */
	type?: 'button' | 'submit' | 'reset' | undefined;

	/**
	 * Right icon class name
	 */
	leftIcon?: string;

	/**
	 * Right icon class name
	 */
	rightIcon?: string;

	/**
	 * Should the spinner be displayed ?
	 */
	spinner?: boolean;

	/**
	 * Is the button disabled ?
	 */
	disabled?: boolean;

	/**
	 * Should the button have no style ?
	 */
	noStyle?: boolean;

	/**
	 * Class of the container
	 */
	className?: string;
}

export default Button;
