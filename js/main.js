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
       url: 'https://pokeapi.co/api/v2/',
       success: function(data) {
       	console.log('success', data)
       	$.each(data, function(i, data){
          $photos = ('<li>'+ data + '</li>');
       	});
       }

  });      
 
}); // end ready









