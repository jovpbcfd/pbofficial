'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

export const BackToTopButton = () => {
	  const [isBackTopButtonVisible, setIsBackTopButtonVisible] = useState(false);

	const SCROLL_THRESHOLD = 300;

	const debounce = (func, delay) => {
		let timeout;
		return function (...args) {
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(this, args), delay);
		};
	};

	const checkScrollPosition = useCallback(
		debounce(() => {
			if (window.scrollY > SCROLL_THRESHOLD) {
				setIsBackTopButtonVisible(true);
			} else {
				setIsBackTopButtonVisible(false);
			}
		}, 100),
		[],
	);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', checkScrollPosition);
			return () => window.removeEventListener('scroll', checkScrollPosition);
		}
	}, [checkScrollPosition]);

	const isWindowDefined = typeof window !== 'undefined';

	const handleBackToTop = useCallback(() => {
		if (!isWindowDefined) return;

		// Scroll to the top of the page
		window.scrollTo({ top: 0, behavior: 'smooth' });

		// Dispatch the custom event to reset the Table of Contents
		window.dispatchEvent(new Event('resetTOC'));

		// Clear the URL fragment (#top) without reloading the page
		window.history.replaceState(null, '', window.location.pathname);
	}, []);

	return (

		      isBackTopButtonVisible && (
		<button
			id="backToTopBtn"
			
			onClick={handleBackToTop}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="80px"
				viewBox="0 -960 960 960"
				width="48px"
				fill="#fff"
			>
				<path d="M450-332h60v-182l74 74 42-42-146-146-146 146 42 42 74-74v182Zm30 252q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
			</svg>
		</button>
	));
};
