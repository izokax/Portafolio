document.addEventListener('DOMContentLoaded', () => {
    const arrowNext = document.querySelector('.arrow-next');
    const arrowPrevious = document.querySelector('.arrow-previous');
    const aboutMiElements = document.querySelectorAll('.Container_Port-ini--about-mi-izo');
    const aboutLink = document.getElementById('about-link');
    const experienceLink = document.getElementById('experience-link');
    const projectsLink = document.getElementById('projects-link');
    const booton = document.querySelector('.arrow-booton');
    const arrowTop = document.getElementById('top');
    const desplazar = document.querySelector('.Container_Port-ini--aside');
    const aboutMiElementsAside = document.querySelectorAll('.Container_Port-ini--about-mi-izo');
    const menuAndroip = document.querySelector('.bars-menu');
    const showMenuAndroip = document.querySelector('.Menu-androip');
    const hidden = document.querySelector('.Menu-androip .fa-xmark');
    const menuLinks = document.querySelectorAll('.Menu-androip a');



    menuAndroip.addEventListener('click', toogleMenu);
    hidden.addEventListener('click', toogleCloseMenu);
    menuLinks.forEach(link => link.addEventListener('click', closeMenuOnClick));


    function toogleMenu() {
        showMenuAndroip.classList.toggle('inactive');
        showMenuAndroip.classList.toggle('active');
    }

    function toogleCloseMenu() {
        showMenuAndroip.classList.remove('active');
        showMenuAndroip.classList.add('inactive');
    }

    function closeMenuOnClick() {
        showMenuAndroip.classList.remove('active');
        showMenuAndroip.classList.add('inactive');
    }
    // controlar el movimiento de las imagenes 
     const slider = document.querySelector('.conatainer__experiencies-trabajos--img');
    
let slideIndex = 0;

function showSlide(slideIndex) {
  const images = slider.querySelectorAll('img');
  images.forEach((img, index) => {
    if (index === slideIndex) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none'; 
    }
  });
}

function nextSlide () {
  slideIndex = (slideIndex + 1) % 2; 
  showSlide(slideIndex);
}
setInterval(nextSlide, 6000); 


//     // -------
//     let currentIndex = 0;
//     function changeActiveElement() {
//         aboutMiElementsAside.forEach(element => {
//             element.classList.remove('active');
//         });
//         currentIndex = (currentIndex + 1) % aboutMiElementsAside.length;
//         aboutMiElementsAside[currentIndex].classList.add('active');
//     }
//     setInterval(changeActiveElement, 3000);

    // booton.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     desplazar.classList.toggle('active');
    //     desplazar.classList.toggle('inactive');
    //     arrowTop.style.display = (arrowTop.style.display === 'none' || arrowTop.style.display === '') ? 'inline' : 'none';
    //     booton.querySelector('.fa-arrow-down-long').style.display = (arrowTop.style.display === 'none') ? 'inline' : 'none';
    // });

    // let currentElementIndex = 0;
    // if (aboutMiElements.length > 0) {
    //     aboutMiElements[currentElementIndex].classList.add('active');
    // }

    // arrowNext.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     aboutMiElements[currentElementIndex].classList.remove('active');
    //     currentElementIndex = (currentElementIndex + 1) % aboutMiElements.length;
    //     aboutMiElements[currentElementIndex].classList.add('active');
    //     updateLinkStyle();
    // });

    // arrowPrevious.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     aboutMiElements[currentElementIndex].classList.remove('active');
    //     currentElementIndex = (currentElementIndex - 1 + aboutMiElements.length) % aboutMiElements.length;
    //     aboutMiElements[currentElementIndex].classList.add('active');
    //     updateLinkStyle();
    // });

//     function updateLinkStyle() {
//         aboutLink.classList.remove('active');
//         experienceLink.classList.remove('active');
//         projectsLink.classList.remove('active');

//         if (currentElementIndex === 0) {
//             aboutLink.classList.add('active');
//         } else if (currentElementIndex === 1) {
//             experienceLink.classList.add('active');
//         } else if (currentElementIndex === 2) {
//             projectsLink.classList.add('active');
//         }
//     }

});
