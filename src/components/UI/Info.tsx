import React, { ReactNode } from 'react';

import './Info.scss';

const Info = ({ title, className, children }: InfoProps) => (
	<div className={`info ${className || ''}`}>
		<div className="info-title">
			<i className="fas fa-info-circle info-icon" /> {title}
		</div>

		{children && <div className="info-content">{children}</div>}
	</div>
);

interface InfoProps {
	title?: string;
	className?: string;
	children?: ReactNode;
}

export default Info;
