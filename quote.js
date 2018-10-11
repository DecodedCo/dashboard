// Adapted from https://api.jquery.com/jquery.getjson/
$.getJSON("https://quotes.rest/qod.json?category=inspire", function( data ) {
  var quoteText = data.contents.quotes[0].quote
 
  $('#quote').html(quoteText)

});
