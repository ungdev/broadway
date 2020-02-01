import React, { ReactNode } from 'react';

import './Inputs.scss';

/**
 * Displays an input
 */
const Input = ({
	type,
	label,
	placeholder,
	value,
	onChange,
	min,
	max,
	className,
	autocomplete,
	disabled,
	autoFocus,
}: InputProps) => {
	const handleChange = (newValue: string | number) => {
		if (type === 'number' && ((min != null && newValue < min) || (max != null && newValue > max))) {
			return;
		}

		if (onChange != null) {
			onChange(newValue);
		}
	};

	return (
		<div className={`input ${className || ''}`}>
			<label>
				<div className="input-label">{label}</div>

				<input
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={(e) => handleChange(e.target.value)}
					autoComplete={autocomplete}
					disabled={disabled}
					title={disabled ? 'Vous ne pouvez pas modifier ce champ' : undefined}
					autoFocus={autoFocus}
				/>

				<div className="line" />
			</label>
		</div>
	);
};

interface InputProps {
	/**
	 * Input type
	 */
	type: 'text' | 'email' | 'password' | 'number';
	/**
	 * Label to display
	 */
	label?: ReactNode;
	/**
	 * Text to display if field is blank
	 */
	placeholder?: string;
	/**
	 * Value of the input
	 */
	value?: string | number;
	/**
	 * Function called when the value change,
	 * the new value is passed as parameter
	 */
	onChange?: (newValue: string | number) => void;
	/**
	 * Minimum value (only for type="number")
	 */
	min?: number;
	/**
	 * Maximum value (only for type="number")
	 */
	max?: number;
	/**
	 * Class of the container
	 */
	className: string;
	/**
	 * Autocomplete type
	 */
	autocomplete: string;
	/**
	 * Is the input disabled ?
	 */
	disabled: boolean;
	/**
	 * Should the input have the focus by default ?
	 */
	autoFocus: boolean;
}

export default Input;
