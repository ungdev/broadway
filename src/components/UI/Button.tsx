import React, { ReactNode } from 'react';

import './Button.scss';

/**
 * Displays a button that triggers an action when clicked
 */
const Button = ({
	primary,
	onClick,
	children,
	type,
	leftIcon,
	rightIcon,
	disabled,
	noStyle,
	className,
}: ButtonProps) => (
	<button
		type={type || 'button'}
		className={`button ${className || ''} ${primary ? 'primary' : ''} ${noStyle ? 'no-style' : ''} ${
			!children ? 'empty' : ''
		}`}
		onClick={onClick}
		disabled={disabled}>
		{leftIcon && <i className={`button-icon-left ${leftIcon}`} />}
		{children}
		{rightIcon && <i className={`button-icon-right ${rightIcon}`} />}
	</button>
);

interface ButtonProps {
	/**
	 * Whether the button is a primary button or not
	 */
	primary?: boolean;

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
