const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let currentImageIndex = 0;
let intervalId;
const totalImages = images.length;

const carouselImage = document.getElementById('carousel-image');
const carouselTitle = document.getElementById('carousel-title');
const carouselText = document.getElementById('carousel-text');

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const autoButton = document.getElementById('autoButton');
const stopButton = document.getElementById('stopButton');

const startCarousel = () => {
    intervalId = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }, 3000);
}

const stopCarousel = () => {
    clearInterval(intervalId);
}

autoButton.addEventListener('click', startCarousel);
stopButton.addEventListener('click', stopCarousel);

const showImage = (index) => {
    const { image, title, text } = images[index];
    carouselImage.src = image;
    carouselTitle.textContent = title;
    carouselText.textContent = text;
}

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
})

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
})