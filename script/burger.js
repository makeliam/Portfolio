$(document).ready(function () {
  // Initialisation : masquer le menu sur les écrans larges
  $('#menuBurger').hide();

  // Gestion de la visibilité en fonction de la largeur de l'écran
  $(window).resize(function () {
    if ($(window).width() <= 650) {
      // Afficher le menu sur les petits écrans
      $('#burgerIcon').show();
    } else {
      // Pour masquer le menu sur les grands écran
      $('#menuBurger').hide();
      $('#burgerIcon').hide();
    }
  });

  // Gestion du clic sur l'icône burger avec animation
  $('#burgerIcon').click(function () {
    $('#menuBurger').slideToggle('slow');
  });

  // Gestion du clic sur un lien du menu
  $('#menuBurger a').click(function () {
    // ici c'est pour masquer le menu
    $('#menuBurger').slideUp('slow');
  });
});
