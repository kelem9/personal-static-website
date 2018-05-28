var shine = new Shine(document.getElementById('my-shine-object'));
window.addEventListener('mousemove', function(event) {
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  shine.config.numSteps = 5;
  shine.config.opacity = 0.15;
  shine.config.opacityPow = 7.4;
  shine.config.offset = 0.04;
  shine.config.offsetPow = 1.8;
  shine.config.blur = 0;
  shine.config.blurPow= 0;
  shine.draw();
}, false);