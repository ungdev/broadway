import React, { ReactNode } from 'react';

import './SubTitle.scss';

/**
 * Displays a title with two hr
 */
const SubTitle = ({ children, className }: TitleProps) => {
	return (
		<div id="centerDiv">
			<div>
				<h1 className={`title ${className || ''}`}>{children}</h1>
			</div>
		</div>
	);
};

interface TitleProps {
	/**
	 * Content of the title
	 */
	children: ReactNode;
	/**
	 * Class of the container
	 */
	className?: string;
}

export default SubTitle;
