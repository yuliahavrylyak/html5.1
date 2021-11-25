const images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', "img/img4.jpg"];

const currentImage = document.getElementById('currentImage');
currentImage.src = images[0];

let i = 0;
document.querySelectorAll('.mini-img').forEach(image => image.src = images[i++]);

function previous() {
   const currentIndex = images.indexOf(`img/${currentImage.src.split('/img/')[1] }`);
   if (currentIndex !== 0) {
       currentImage.src = images[currentIndex - 1];
   } else {
       currentImage.src = images[images.length - 1];
   }
}

function next() {
   const currentIndex = images.indexOf(`img/${currentImage.src.split('/img/')[1] }`);
   if (currentIndex !== images.length - 1) {
       currentImage.src = images[currentIndex + 1];
   } else {
       currentImage.src = images[0];
   }
}

function setImage(index) {
   currentImage.src = images[index];
}
