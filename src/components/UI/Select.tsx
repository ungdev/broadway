import React from 'react';

import './Inputs.scss';

/**
 * Displays a select
 */
const Select = ({ label, options, value, onChange, disabled, className }: SelectProps) => (
	<div className={`select ${className || ''}`}>
		<label>
			<div className="select-label">{label}</div>

			<select value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled}>
				{options.map((option) => (
					<option value={option.value} key={option.value}>
						{option.label}
					</option>
				))}
			</select>

			<div className="line" />
		</label>
	</div>
);

interface OptionProps {
	label: string;
	value: string | number;
}

interface SelectProps {
	/**
	 * Label to display
	 */
	label: string;
	/**
	 * List of options
	 */
	options: Array<OptionProps>;
	/**
	 * Value of the select
	 */
	value: string | number;
	/**
	 * Function called when the value change,
	 * the new value is passed as parameter
	 */
	onChange: (value: string | number) => void;
	/**
	 * Is the field disabled ?
	 */
	disabled?: boolean;
	/**
	 * Class of the container
	 */
	className?: string;
}

export default Select;
