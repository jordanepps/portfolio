function addLetterSpan() {
	$('.letters').each(function() {
		$(this).html(
			$(this)
				.text()
				.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
		);
	});
}

function handleProjectHover() {
	// $('.project-links').hover(
	// 	function(e) {
	// 		$(e.target)
	// 			.children('div')
	// 			.removeClass('hide');
	// 	},
	// 	function(e) {
	// 		$(e.target)
	// 			.children('div')
	// 			.addClass('hide');
	// 	}
	// );
	// $('.project-img-container').on('hover mouseover', function(e) {
	// 	$(e.target)
	// 		.children('div')
	// 		.toggleClass('hide');
	// });

	$('.project-img-container').on('mouseover', function(e) {
		console.log('hover');
	});
}

function handleBioAnimation() {
	anime
		.timeline()
		.add({
			targets: '.bio-text',
			opacity: [0, 1],
			easing: 'linear'
		})
		.add({
			targets: '.letter',
			scale: [0.3, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: 'easeOutExpo',
			duration: 10,
			delay: function(el, i) {
				return 70 * (i + 1);
			}
		})
		.add({
			targets: '.bio-title .line',
			scaleX: [0, 1],
			opacity: [0.5, 1],
			easing: 'easeOutExpo',
			duration: 800,
			offset: '-=875',
			delay: function(el, i, l) {
				return 80 * (l - i);
			}
		})
		.add({
			targets: '.bio',
			opacity: [0, 1],
			easing: 'easeInExpo',
			duration: 300
		});
}

function main() {
	$(addLetterSpan);
	$(handleProjectHover);
	// $(handleBioAnimation);
}

$(main);
