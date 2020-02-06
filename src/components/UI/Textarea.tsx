import React from 'react';

import './Inputs.scss';

/**
 * Displays a textarea
 */
const Textarea = ({ placeholder, value, onChange, className }: TextareaProps) => (
	<label className={`textarea ${className || ''}`}>
		<textarea value={value} onChange={(e) => onChange(e.target.value)} />

		<div className="placeholder">{placeholder}</div>
	</label>
);

interface TextareaProps {
	/**
	 * Placeholder to display
	 */
	placeholder: string;
	/**
	 * Value of the input
	 */
	value: string;
	/**
	 * Function called when the value change,
	 * the new value is passed as parameter
	 */
	onChange: (value: string) => void;
	/**
	 * Class of the container
	 */
	className?: string;
}

export default Textarea;
