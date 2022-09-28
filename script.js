$(document).ready(function(){
$('.nav_hamburger_menu').on('click', function(e){
  e.preventDefault();
  $('body').toggleClass('nav_hamburger_menu');
});
})