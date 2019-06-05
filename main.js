function scrollOnClick() {
  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top
      },
      500
    );
  });
}

function mainSectionFadeIn() {
  anime.timeline().add({
    targets: '#logo, .nav-links, .bio-image, #contact, #projects',
    opacity: [0, 1],
    easing: 'linear',
    duration: 2000
  });
}

function addLetterSpan() {
  $('.letters').each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
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

      easing: 'easeOutExpo',
      duration: 300
    });
}

function main() {
  $(addLetterSpan);
  $(handleBioAnimation);
  $(mainSectionFadeIn);
  $(scrollOnClick);
}

$(main);
