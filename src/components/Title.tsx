import React, { ReactNode } from 'react';

import './Title.scss';

/**
 * Displays a title
 */
const Title = ({ level, children, gutterBottom, align, uppercase, className }: TitleProps) => {
	const Component = `h${level}`;

	/* eslint-disable */
	// prettier-ignore
	// @ts-ignore
	return (<Component
			className={`title title-${level} ${className} ${align} ${gutterBottom ? 'gutterBottom' : ''} ${
				uppercase ? 'uppercase' : ''
			}`}>
			<div className="title-content">{children}</div>
		</Component>
	);
	/* eslint-enable */
};

interface TitleProps {
	/**
	 * Set title importance
	 */
	level: 1 | 2 | 3 | 4;
	/**
	 * Content of the title
	 */
	children: ReactNode;
	/**
	 * Enable bottom margin
	 */
	gutterBottom: boolean;
	/**
	 * text-align of the component
	 */
	align: 'inherit' | 'center' | 'justify' | 'left' | 'right';
	/**
	 * Should the text be uppercase ?
	 */
	uppercase: boolean;
	/**
	 * Class of the container
	 */
	className: string;
}

export default Title;
