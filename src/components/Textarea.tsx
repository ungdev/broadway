import React from 'react';

import './Inputs.scss';

/**
 * Displays a textarea
 */
const Textarea = ({ label, placeholder, value, onChange, className }: TextareaProps) => (
	<div className={`textarea ${className}`}>
		<label>
			<div className="textarea-label">{label}</div>

			<textarea value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />

			<div className="line" />
		</label>
	</div>
);

interface TextareaProps {
	/**
	 * Label to display
	 */
	label: string;
	/**
	 * Text to show when field is blank
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
	className: string;
}

export default Textarea;
