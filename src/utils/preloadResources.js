'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
	// Preload the wave pattern image
	ReactDOM.preload('https://panalobetofficial.com/images/wave-pattern.png', {
		as: 'image',
	});

	return null; // This component doesn't render anything visible
}
