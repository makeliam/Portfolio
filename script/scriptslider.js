$(document).ready(function () {
  // Variables
  let currentSlide = 0;
  const slides = $('.images-area img');
  const totalSlides = slides.length;

  // Fonction pour passer à la diapositive suivante
  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    updateSlider();
  }

  // Fonction pour passer à la diapositive précédente
  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - 1;
    }
    updateSlider();
  }

  // Fonction pour mettre à jour le slider
  function updateSlider() {
    const translateValue = -currentSlide * 100;
    slides.css('transform', 'translateX(' + translateValue + '%)');
  }

  // Écouteurs d'événements pour les boutons suivant et précédent
  $('.next-btn').on('click', nextSlide);
  $('.previous-btn').on('click', prevSlide);
});
