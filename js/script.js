'use strict';



// variables for navbar toggle
const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const menu = document.querySelector('.nav');
const menuLinkBtn = document.querySelectorAll('.nav-link');

// navbar toggle function
const menuToggle = () => menu.classList.toggle('active');

// addEventListener on close and open button
menuOpenBtn.addEventListener('click', menuToggle);
menuCloseBtn.addEventListener('click', menuToggle);

// addEventListener on all navlink
for (let i = 0; i < menuLinkBtn.length; i++) {
  menuLinkBtn[i].addEventListener('click', menuToggle);
}



// variables for tab navigation
const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');

// tab navigation funtionality
for (let i = 0; i < tabButtons.length; i++) {

  tabButtons[i].addEventListener('click', function () {

    for (let i = 0; i < tabContent.length; i++) {

      if (tabButtons[i].classList.contains('active')) tabButtons[i].classList.remove('active');

      if (tabContent[i].classList.contains('active')) tabContent[i].classList.remove('active');

      if (tabContent[i].classList.contains(this.classList[0])) tabContent[i].classList.add('active');

    }

    this.classList.add('active');

  });

}

const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Software Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "SpokenWord Writer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Clarinetist";
            }, 8000); //1s = 1000 milliseconds
            setTimeout(() => {
                text.textContent = "Singer";
            }, 12000); 
            setTimeout(() => {
                text.textContent = "Soccer player";
            }, 16000);
        }

        textLoad();
        setInterval(textLoad, 16000);


// variables for portfolio carousel
const portfolioCarouselCards = document.querySelectorAll('.portfolio-carousel-card');
const portfolioCarouselInner = document.querySelector('.portfolio-carousel-inner');
const portfolioCarouselNext = document.querySelector('#portfolio-carousel-next');
const portfolioCarouselPrev = document.querySelector('#portfolio-carousel-prev');

// create initial value for transform
const totalPortfoCard = portfolioCarouselCards.length;
let portfoCount = 0;

// carousel function
const carouselFunc = function (countParam) {

  if (countParam >= totalPortfoCard - 1) portfoCount = totalPortfoCard - 1;

  if (countParam <= 0) portfoCount = 0;

  portfolioCarouselInner.style.transform = `translateX(-${100 / totalPortfoCard * portfoCount}%)`;

}

// addEventListener on carousel next button
portfolioCarouselNext.addEventListener('click', function () {
  portfoCount++;
  carouselFunc(portfoCount);
});

// addEventListener on carousel previous button
portfolioCarouselPrev.addEventListener('click', function () {
  portfoCount--;
  carouselFunc(portfoCount);
});