import React from 'react';
import Countdown from 'react-countdown';

import './Countdown.scss';

/**
 * Displays a countdown to the specified date
 */
const CountdownComponent = ({ date, className }: CountdownProps) => {
	const renderer = ({ days, hours, minutes, seconds, completed }: RendererProps) => {
		if (completed) {
			return null;
		}

		return (
			<>
				<div className="days">
					<h1>{days}</h1>
					<h2>Jours</h2>
				</div>
				<div className="hours">
					<h1>{hours}</h1>
					<h2>Heures</h2>
				</div>
				<div className="minutes">
					<h1>{minutes}</h1>
					<h2>Minutes</h2>
				</div>
				<div className="seconds">
					<h1>{seconds}</h1>
					<h2>Secondes</h2>
				</div>
			</>
		);
	};

	return (
		<div className={`countdown ${className || ''}`}>
			<Countdown date={date} renderer={renderer} />
		</div>
	);
};

interface CountdownProps {
	/**
	 * The date from which the remaining time will be computed
	 */
	date: Date;
	/**
	 * Class of the container
	 */
	className: string;
}

interface RendererProps {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}

export default CountdownComponent;
