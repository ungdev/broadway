import React, { ReactNode } from 'react';

import './Title.scss';

/**
 * Displays a title
 */
const Title = ({ children, className }: TitleProps) => {
	return <h1 className={`title ${className || ''}`}>{children}</h1>;
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

export default Title;
