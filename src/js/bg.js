const images = [
  './public/1.webp',
  './public/2.webp',
  './public/3.webp',
  './public/4.webp',
  './public/5.webp',
  './public/6.webp',
  './public/7.webp',
  './public/8.webp',
];

let currentImageIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackground, 10000);

changeBackground();
