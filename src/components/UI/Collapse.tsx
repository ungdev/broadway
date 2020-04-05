import React, { useState, useEffect, useRef, ReactNode } from 'react';

import './Collapse.scss';

/**
 * Display an extension panel
 */
const Collapse = ({ title, children, noTopMargin, className }: CollapseProps) => {
	const contentRef = useRef<HTMLDivElement>(null);

	const [contentHeight, setContentHeight] = useState(0);
	const [contentVisible, setContentVisible] = useState(false);

	// Set contentHeight when the visibility change
	const setVisible = (visible: boolean) => {
		if (contentRef.current !== null) {
			setContentHeight(contentRef.current.scrollHeight);
			setContentVisible(visible);
		}
	};

	// Set contentHeight when children prop change
	useEffect(() => {
		if (contentRef.current !== null) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, [children]);

	return (
		<div
			className={`collapse ${className || ''} ${contentVisible ? 'active' : ''} ${noTopMargin ? 'no-top-margin' : ''}`}>
			<div className="collapse-title" onClick={() => setVisible(!contentVisible)}>
				{title}

				<div className="collapse-arrow">
					<i className="fas fa-chevron-down" />
				</div>
			</div>

			<div className="collapse-content" ref={contentRef} style={{ maxHeight: contentVisible ? contentHeight : 0 }}>
				{children}
			</div>
		</div>
	);
};

interface CollapseProps {
	/**
	 * Title of the panel
	 */
	title: ReactNode;
	/**
	 * Content to display when the user clicks on the title
	 */
	children: ReactNode;
	/**
	 * Should the content have a top margin ?
	 */
	noTopMargin?: boolean;
	/**
	 * Class of the container
	 */
	className?: string;
}

export default Collapse;
