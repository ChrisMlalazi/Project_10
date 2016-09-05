$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
});


$(document).ready(function () {
  var $photos = $('#photos');
  $.ajax({
       type: 'GET',
       url: 'http://pokeapi.co/api/v2/',
       success: function(data) {
       	console.log('success', picture)
       	$.each(picture, function(i, picture){
          $photos.append('<li>Pictures</li>');
       	});
       }

  });      
 
}); // end ready









