
const tl = gsap.timeline({
  paused: true, // Start at a paused state
  defaults: {
    ease: 'none' // With no easing (linear)
  }
})

tl
  .to('.mask', {
    translateY: 296,
    duration: 3,
  })
  .to('#bg-color', {
    attr: {
      fill: '#ffd11b'
    },
    duration: 2
  }, '<+=1')

  const picture = document.querySelector('.picture');

  function onMouseMove(event) {
      const rect = picture.getBoundingClientRect();

      const relPos = (event.clientY - rect.top) / (rect.bottom - rect.top)

      tl.progress(relPos);
  }

  picture.addEventListener('mousemove', onMouseMove, 60);