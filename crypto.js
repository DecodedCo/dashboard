// Define cryptocurrency
var cryptoSymbol = 'BTC'
// Define currency for comparison. Could change to EUR or GBP 
var cryptoForex = 'USD'
// Get currency data
$.getJSON("https://min-api.cryptocompare.com/data/price?fsym=" + cryptoSymbol + "&tsyms=" + cryptoForex, function( data ) {
  // Capture currency data sentance in a variable called cryptoText
  var cryptoText = cryptoSymbol + " 1 = " +  cryptoForex + " " + data[cryptoForex]
  // Push cryptoText into any html item labelled crypto 
  $('#crypto').html(cryptoText)
});
