$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
});


$(document).ready(function () {
  $('button').click(function () {
    $(this).addClass("selected");
    $("button").removeClass("selected");
		 var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal = $(this).text();
		var flickrOptions = {
		tags: animal,
			format: "json"
		};
		function displayPhotos(data){
			var photoHTML = '<ul>';
			$.each(data.items, function(i, photo){
				photoHTML += '<li class+"grid-25 table-grid-50">';
				photoHTML += '<a href="' + photo.link + '" class="image">';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';
				photoHTML += '</ul>';
				$('#photos').html(photoHTML);
			});
			
		}
		$.getJSON(flickerAPI, flickrOptions, displayPhotos);
		
       
  });
}); // end ready









