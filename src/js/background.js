const images = [
  '../img/webp/1.webp',
  '../img/webp/2.webp',
  '../img/webp/3.webp',
  '../img/webp/4.webp',
  '../img/webp/5.webp',
  '../img/webp/6.webp',
  '../img/webp/7.webp',
  '../img/webp/8.webp',
];

let currentImageIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackground, 10000);

changeBackground();
