$(document).ready(function(){
$('.nav_hamburger_btn').on('click', function(e){
  e.preventDefault();
  $('body').toggleClass('nav_hamburger_menu');
});
})
