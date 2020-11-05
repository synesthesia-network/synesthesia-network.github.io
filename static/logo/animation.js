function fitElementToParent(el, padding) {
	var timeout = null;
	function resize() {
		if (timeout) clearTimeout(timeout);
		anime.set(el, { scale: 1 });
		var pad = padding || 0;
		var parentEl = el.parentNode;
		var elOffsetWidth = el.offsetWidth - pad;
		var parentOffsetWidth = parentEl.offsetWidth;
		var ratio = parentOffsetWidth / elOffsetWidth;
		timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
	}
	resize();
	window.addEventListener('resize', resize);
}

function animateLogo(still = false, fit = false) {
	var blockEl = document.querySelector('#blockAnimation');
	var blockPathEls = blockEl.querySelectorAll('polygon');
	var pathLength = blockPathEls.length;
	var animations = [];

	if (fit) {
		fitElementToParent(blockEl);
	}

	var breathAnimation = anime({
		begin: function () {
			for (var i = 0; i < pathLength; i++) {
				let breathHeight = still ? 0 : 4;
				animations.push(anime({
					targets: blockPathEls[i],
					stroke: { value: [`hsl(${i * (360 / (pathLength - 1))},100%,50%)`, 'rgba(80,80,80,.35)'], duration: 500 },
					translateY: [100 - (100 / (pathLength - 1) * i), 100 - (100 / (pathLength - 1) * i) + breathHeight],
					easing: 'easeOutQuad',
					autoplay: false
				}));
			}
		},
		update: function (ins) {
			animations.forEach(function (animation, i) {
				var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
				animation.seek(animation.duration * percent);
			});
		},
		duration: Infinity,
		autoplay: false
	});

	var introAnimation = anime.timeline({
		autoplay: false
	})
		.add({
			targets: blockPathEls,
			strokeDashoffset: {
				value: [anime.setDashoffset, 0],
				duration: 3900,
				easing: 'easeInOutCirc',
				delay: anime.stagger(190, { direction: 'reverse' })
			},
			duration: 2000,
			delay: anime.stagger(60, { direction: 'reverse' }),
			easing: 'linear'
		}, 0);

	var shadowAnimation = anime({
		targets: '#blockGradient',
		x1: '25%',
		x2: '25%',
		y1: '0%',
		y2: '75%',
		duration: 30000,
		easing: 'easeOutQuint',
		autoplay: false
	}, 0);

	function init() {
		introAnimation.play();
		breathAnimation.play();
		shadowAnimation.play();
	}

	init();
};

var still = document.currentScript.getAttribute('still') || false;
var fit = document.currentScript.getAttribute('fit') || true;

animateLogo(still, fit);
