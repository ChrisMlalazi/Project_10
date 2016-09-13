 
$(document).ready(function() {

 $('button').click(function (event) {
      event.preventDefault();
    // highlight the button
    // not AJAX, just cool looking
    $("button").removeClass("selected");
    $(this).addClass("selected");
      // var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      var animal = $(this).text();
      var flickrOptions = {
        tags: "nature",
        format: "json"
      };


// $('#photos').ready(function() {

    // the AJAX part
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
   function displayPhotos(data) {
      var photoHTML = '<ul>';
    $.each(data.items,function(i,photo) {
      photoHTML += '<li>';
      photoHTML += '<a href=" ' + photo.media.m + ' " data-lightbox="image" data-title=" Title: ' + photo.title + '. <br> Submitted: ' + photo.published + '. <br> Tag: ' + photo.tags + '. " ">';
      photoHTML += '<img src="' + photo.media.m + ' " id="images"></a></li>';
    }); //
  photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      //add event listener to start the lightbox
                            img.addEventListener("click",  function(e){startLightbox(items)}, false);
                            document.getElementById("photos").appendChild(img); 
      
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

        
     // $.getJSON(flickerAPI, choice, displayPhotos);

  }); // end click

}); // end ready





