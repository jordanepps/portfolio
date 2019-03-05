// Wrap every letter in a span
$('.letters').each(function() {
	$(this).html(
		$(this)
			.text()
			.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
	);
});

anime
	.timeline()
	.add({
		targets: '.bio-text',
		// scale: [0.3, 1],
		opacity: [0, 1],
		easing: 'linear'
		// delay: 700
	})
	.add({
		targets: '.letter',
		scale: [0.3, 1],
		opacity: [0, 1],
		translateZ: 0,
		easing: 'easeOutExpo',
		duration: 100,
		delay: function(el, i) {
			return 70 * (i + 1);
		}
	})
	.add({
		targets: '.bio-title .line',
		scaleX: [0, 1],
		opacity: [0.5, 1],
		easing: 'easeOutExpo',
		duration: 700,
		offset: '-=875',
		delay: function(el, i, l) {
			return 80 * (l - i);
		}
	})
	.add({
		targets: '.bio-p',
		opacity: [0, 1],
		easing: 'easeInExpo',
		duration: 300
	});

// anime
// 	.timeline()
// 	.add({
// 		targets: '.bio-p .p1',
// 		opacity: [0, 1],
// 		easing: 'easeInExpo',
// 		duration: 200
// 	})
// 	.add({
// 		targets: '.bio-p .p2',
// 		opacity: [0, 1],
// 		easing: 'easeInExpo'
// 	});
