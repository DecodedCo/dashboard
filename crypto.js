// Adapted from https://api.jquery.com/jquery.getjson/

// CHALLENGE:
// Replace this simple tracker with a full-blown tracker widget from https://www.cryptocompare.com/dev/widget/wizard

var cryptoSymbol = 'BTC'
var cryptoForex = 'GBP'
$.getJSON("https://min-api.cryptocompare.com/data/price?fsym=" + cryptoSymbol + "&tsyms=" + cryptoForex, function( data ) {
  var cryptoText = cryptoSymbol + " 1 = " +  cryptoForex + " " + data[cryptoForex]

  $('#crypto').html(cryptoText)

});
