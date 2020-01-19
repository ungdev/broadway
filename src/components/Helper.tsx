import React, { ReactNode } from 'react';

import './Helper.scss';

const Helper = ({ children, className }: HelperProps) => (
	<div className={`helper ${className}`}>
		<i className="fas fa-question-circle helper-icon" tabIndex="0" />

		<div className="helper-content">{children}</div>
	</div>
);

interface HelperProps {
	/**
	 * To display when the cursor is hover the helper
	 */
	children: ReactNode;
	/**
	 * Class to apply to the container
	 */
	className?: string;
}

export default Helper;
