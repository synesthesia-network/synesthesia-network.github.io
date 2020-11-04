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

var blockAnimation = (function () {

	var blockEl = document.querySelector('.block-animation');
	var blockPathEls = blockEl.querySelectorAll('.block polygon');
	var pathLength = blockPathEls.length;
	var animations = [];

	fitElementToParent(blockEl);

	var breathAnimation = anime({
		begin: function () {
			for (var i = 0; i < pathLength; i++) {
				animations.push(anime({
					targets: blockPathEls[i],
					stroke: { value: [`hsl(${i * (360 / 10)},100%,50%)`, 'rgba(80,80,80,.35)'], duration: 500 },
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

})();
