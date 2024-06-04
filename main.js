"use strict"

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    effect: 'coverflow',
    slidesPerView: 2,
    centeredSlides: true,
    initialSlide: 1,
    freeMode: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // autoplay: {
        delay: 2000,
    // },
  

  });

  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const slides = document.querySelectorAll(".slider-image");
  const bottom = document.getElementById("bottom");

  let currentSlideIndex = 0;
  


  function showSlide() {
    slides[currentSlideIndex].classList.add("block");
  }

  function hideSlide() {
    slides[currentSlideIndex].classList.remove("block");
  }


  function nextSlide() {
    hideSlide();
    currentSlideIndex ++;
    if(currentSlideIndex > slides.length - 1) {
      currentSlideIndex = 0;
    }
    showSlide();
  }

  arrowRight.addEventListener("click", nextSlide);

  function previousSlide(){
     hideSlide();
     currentSlideIndex --;
     if(currentSlideIndex < 0){
      currentSlideIndex = slides.length - 1;
     }

    showSlide();

  }

  arrowLeft.addEventListener("click", previousSlide);
