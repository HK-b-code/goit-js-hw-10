const images = [
  '../bg/1.webp',
  '../bg/2.webp',
  '../bg/3.webp',
  '../bg/4.webp',
  '../bg/5.webp',
  '../bg/6.webp',
  '../bg/7.webp',
  '../bg/8.webp',
];

let currentImageIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackground, 10000);

changeBackground();
