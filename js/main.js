$(document).on('ready', function() {
  console.log('test');

  $('form').submit(function(event) {
    event.preventDefault();

    var number = $('#number').val();
    var name = $('#name').val();

    var id = $('#name').val() || $('#number').val();

    if (id === '') {
      $("input").val('');
      alert('enter a pokemon name or number');
    } else {
      $('.pokemon').append('<img class="load" src="http://66.media.tumblr.com/4e5ea9cd6a7f7c24be02d97f5a50f7ab/tumblr_mn1617ipjN1soo2hgo1_250.gif">')

      $.ajax({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon/' + id,
        success: function(pokemon) {

          console.log(pokemon);

          $('.pokemon').append('<img src="http://pokeapi.co/media/sprites/pokemon/shiny/' + pokemon.id + '.png">');
          $('.pokemonName').append('<p>' + pokemon.forms[0].name + '</p>');
          $("input").val('');
          $('.load').remove();

        },
        error: function(xhr, ajaxOptions, thrownError) {
          $("input").val('');
          alert('not a pokemon');
          $('.load').remove();
        }
      });
    }
  });
});