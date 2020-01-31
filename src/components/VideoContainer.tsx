import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';

import './VideoContainer.scss';

/**
 * Displays iframe and keeps 16:9 ratio
 */
const VideoContainer = ({ title, src, className }: VideoContainerProps) => (
	<div className={`video-container ${className}`}>
		<div className="video-container-ratio">
			<div className="video-container-full">
				<iframe
					className="lazyload"
					title={title}
					data-src={src}
					frameBorder="0"
					allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"
					allowFullScreen
				/>
			</div>
		</div>
	</div>
);

interface VideoContainerProps {
	/**
	 * Title of the iframe
	 */
	title: string;
	/**
	 * Source of the iframe
	 */
	src: string;
	/**
	 * Class of the container
	 */
	className?: string;
}

export default VideoContainer;
