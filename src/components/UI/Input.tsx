import React, { useRef, useEffect } from 'react';

import './Inputs.scss';

/**
 * Displays an input
 */
const Input = ({ type, placeholder, value, onChange, autocomplete, autoFocus, className }: InputProps) => {
	const inputRef = useRef(null as HTMLInputElement | null);

	useEffect(() => {
		if (autoFocus) {
			inputRef.current?.focus();
		}
	}, [autoFocus]);

	return (
		<label className={`input ${className || ''}`}>
			<input
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				autoComplete={autocomplete}
				ref={inputRef}
			/>

			<div className="placeholder">{placeholder}</div>
		</label>
	);
};

interface InputProps {
	/**
	 * Input type
	 */
	type: 'text' | 'email' | 'password';
	/**
	 * Placeholder to display
	 */
	placeholder?: string;
	/**
	 * Value of the input
	 */
	value?: string;
	/**
	 * Function called when the value change,
	 * the new value is passed as parameter
	 */
	onChange: (newValue: string) => void;
	/**
	 * Autocomplete type
	 */
	autocomplete?: string;
	/**
	 * Should the input be focused by default ?
	 */
	autoFocus?: boolean;
	/**
	 * Class of the container
	 */
	className?: string;
}

export default Input;
