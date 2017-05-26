$(document).ready(function(){
  console.log('songs.js sourced!');
  $('#addSongButton').on('click', function(){
    console.log('in addSongButton on click');
    // get user input
    // create an object to send to server
    var objectToSend = {
      song: $('#songIn').val(),
      artist: $('#artistIn').val()
    }; // end objectToSend
    console.log('sending:', objectToSend);
    // use AJAX to send object to server
    $.ajax({
      type: 'POST',
      url: '/newSong',
      data: objectToSend,
      success: function(response){
        console.log('back from post:', response);
        // when back from server update display
      } // end success
    }); // end AJAX
    // when back from server, update  display
  }); // end addSongButton on click
  // Initialize
  getSongs();
});

var getSongs = function(){
  //AJAX call to get songs
  $.ajax({
    type: 'GET',
    url: '/allSongs',
    success: function(response){
      console.log('back from server with:', response);
      for (var i = 0; i < response.allSongs.length; i++) {
        $('#outputDiv').append();
      // when back from server update displayed
      console.log('get /allSongs hit');
    }
  }); // end object
};
