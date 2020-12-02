import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Hero() {
	const [animeLoaded, setAnimeLoaded] = useState(false);
	const [animationLoaded, setAnimationLoaded] = useState(false);

	let animationScript = useBaseUrl("logo/animation.js");

	useEffect(() => {
		var loadScript = function (src) {
			var tag = document.createElement('script');
			tag.async = false;
			tag.src = src;
			var body = document.getElementsByTagName('body')[0];
			body.appendChild(tag);
		}

		if (!animeLoaded) {
			loadScript("https://unpkg.com/animejs/lib/anime.min.js");
			setAnimeLoaded(true);
		}

		if (!animationLoaded) {
			loadScript(animationScript);
			setAnimationLoaded(true);
		}
	});

	return (
		<div className={styles.heroWrapper}>
			<div className={styles.hero}>
				<div className={styles.title}>synesthesia</div>
				<div className={styles.subtitle}>a different kind of blockchain</div>
			</div>
			<div id="animationWrapper" className={styles.animationWrapper}>
				<div id="blockAnimation" className={styles.blockAnimation}>
					<noscript>
					{/* When JavaScript is disabled, show a static logo with colors. */}
					<svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
						<g stroke="rgba(180,180,180,.25)" fill="rgba(0,0,0,0)" transform="translate(10,10)">
							<polygon stroke="hsla(0,100%,50%,.5)" transform="translate(0,100)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(36,100%,50%,.5)" transform="translate(0,90)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(72,100%,50%,.5)" transform="translate(0,80)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(108,100%,50%,.5)" transform="translate(0,70)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(144,100%,50%,.5)" transform="translate(0,60)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(180,100%,50%,.5)" transform="translate(0,50)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(216,100%,50%,.5)" transform="translate(0,40)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(252,100%,50%,.5)" transform="translate(0,30)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(288,100%,50%,.5)" transform="translate(0,20)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(324,100%,50%,.5)" transform="translate(0,10)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(360,100%,50%,.5)" transform="translate(0,0)" points="0 50, 100 100, 200 50, 100 0" />
						</g>
					</svg>
					</noscript>
					{/* When JavaScript is enabled, show a static logo where the lines are hidden to start. JavaScript will then animate them. */}
					<svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
						<g stroke="rgba(180,180,180,.25)" fill="rgba(0,0,0,0)" transform="translate(10,10)">
							<polygon stroke="hsla(0,100%,50%,0)" transform="translate(0,100)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(36,100%,50%,0)" transform="translate(0,90)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(72,100%,50%,0)" transform="translate(0,80)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(108,100%,50%,0)" transform="translate(0,70)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(144,100%,50%,0)" transform="translate(0,60)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(180,100%,50%,0)" transform="translate(0,50)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(216,100%,50%,0)" transform="translate(0,40)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(252,100%,50%,0)" transform="translate(0,30)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(288,100%,50%,0)" transform="translate(0,20)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(324,100%,50%,0)" transform="translate(0,10)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon stroke="hsla(360,100%,50%,0)" transform="translate(0,0)" points="0 50, 100 100, 200 50, 100 0" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	);
}
