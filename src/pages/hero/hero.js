import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function Hero() {
	const [animeLoaded, setAnimeLoaded] = useState(false);
	const [animationLoaded, setAnimationLoaded] = useState(false);

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
			loadScript("../../static/logo/animation.js");
			setAnimationLoaded(true);
		}
	});

	return (
		<div className={styles.heroWrapper}>
			<div className={styles.hero}>
				<div className={styles.title}>synesthesia</div>
				<div className={styles.subtitle}>a different view of blockchains</div>
			</div>
			<div id="animationWrapper" className={styles.animationWrapper}>
				<div id="blockAnimation" className={styles.blockAnimation}>
					<svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
						<g stroke="rgba(180,180,180,.25)" fill="rgba(0,0,0,0)" transform="translate(10,10)">
							<polygon transform="translate(0,100)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon transform="translate(0,90)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon transform="translate(0,80)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon transform="translate(0,70)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon transform="translate(0,60)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon transform="translate(0,50)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon transform="translate(0,40)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon transform="translate(0,30)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon transform="translate(0,20)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon transform="translate(0,10)" points="0 50, 100 100, 200 50, 100 0" />
							<polygon transform="translate(0,0)" points="0 50, 100 100, 200 50, 100 0" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	);
}
