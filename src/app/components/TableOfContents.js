'use client';

import style from '@/styles/accordion.module.css';
import { useState, useEffect, useRef } from 'react';

export const TableOfContents = ({ currentPost }) => {
	const [activeSubHeading, setActiveSubHeading] = useState(null);

	const subHeading = currentPost?.body
		.filter(({ _type, style }) => _type === 'block' && style === 'h2')
		.map(({ _key, children }) => ({
			id: _key,
			text: children.map(({ text }) => text).join(''),
			key: _key,
		}));
	
	const isManualScroll = useRef(false); 

	useEffect(() => {
		
		const handleResetTOC = () => {
			setActiveSubHeading(null);
			// Reset the URL fragment
			if (window.location.hash) {
				window.history.pushState(
					'',
					document.title,
					window.location.pathname + window.location.search,
				);
			}
		};

		window.addEventListener('resetTOC', handleResetTOC); // Add event listener

		// Clear URL fragment on component mount (page refresh)
		handleResetTOC();

		return () => {
			window.removeEventListener('resetTOC', handleResetTOC); // Cleanup
		};
	}, []);


useEffect(() => {
	const observerOptions = {
		root: null, // viewport
		rootMargin: '0px',
		threshold: 0.4, 
	};

	const observer = new IntersectionObserver((entries) => {
		if (isManualScroll.current) return;
		let isHeadingInView = false;

		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setActiveSubHeading(entry.target.id);
				isHeadingInView = true;
			}
		});

		// If no heading is visible, reset the active heading
		if (!isHeadingInView) {
			setActiveSubHeading(null);
		}
	}, observerOptions);

	// Observe each h2 element
	subHeading?.forEach(({ id }) => {
		const element = document.getElementById(id);
		if (element) observer.observe(element);
	});

	return () => {
		// Cleanup observer on unmount
		subHeading?.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) observer.unobserve(element);
		});
	};
}, [subHeading]);


	const handleClick = (id) => {
		setActiveSubHeading(id);
		// Update the URL fragment
		window.location.hash = id;

		// Temporarily pause the observer
			isManualScroll.current = true;
		setTimeout(() => {
				isManualScroll.current = false; // Re-enable the observer after a delay
		}, 1000);
	};
	return (
		<nav className={style['accordion']}>
			
				<h2 className={style['accordion-header']}>Contents</h2>

						<ul className={style['accordion-body']}>
							{subHeading?.map((sub) => (
								<li
									key={sub.id}
									className={style['accordion-list']}
								>
									<a
										href={`#${sub.id}`}
										title={sub.text}
										onClick={() => {
											handleClick(sub.id);
										}}
										className={
											activeSubHeading === sub.id ? `${style.active}` : ''
										}
									>
										{sub.text}
									</a>
								</li>
							))}
						</ul>
				
			
		</nav>
	);
};
