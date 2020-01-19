import React, { useState, ReactNode } from 'react';

import './Tabs.scss';

/**
 * Displays a menu with tabs
 */
const Tabs = ({ tabs, defaultIndex, className }: TabsProps) => {
	const [index, setIndex] = useState(defaultIndex);

	const tabsNav = tabs.map((tab, i) => (
		<button
			className={`tab-nav ${index === i ? 'active' : ''}`}
			onClick={() => {
				if (tab.onClick) {
					tab.onClick(i);
				}
				setIndex(i);
			}}
			key={tab.title}>
			{tab.title}
		</button>
	));

	const tabsContent = tabs.map((tab, i) => (
		<div className={`tab-content ${index === i ? 'active' : ''}`} key={tab.title}>
			{tab.content}
		</div>
	));

	return (
		<div className={`tabs ${className}`}>
			<div className="tabs-nav">{tabsNav}</div>

			<div className="tabs-content">{tabsContent}</div>
		</div>
	);
};

interface TabProps {
	title: string;
	content: ReactNode;
	onClick: (index: number) => void;
}

interface TabsProps {
	/**
	 * Tabs title and content
	 */
	tabs: Array<TabProps>;
	/**
	 * Index of the default tab
	 */
	defaultIndex: number;
	/**
	 * Class of the container
	 */
	className: string;
}

export default Tabs;
