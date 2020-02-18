import React from 'react';

import './Inputs.scss';

/**
 * Displays an input
 */
const Input = ({ type, placeholder, value, onChange, autocomplete, className }: InputProps) => (
	<label className={`input ${className || ''}`}>
		<input type={type} value={value} onChange={(e) => onChange(e.target.value)} autoComplete={autocomplete} />

		<div className="placeholder">{placeholder}</div>
	</label>
);

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
	 * Class of the container
	 */
	className?: string;
}

export default Input;
