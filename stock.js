// Get currency data
$.getJSON("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=API-KEY-HERE&symbol=COMPANY-NAME-HERE", function( data ) {
  // Create a variable to store the global data
  var stock = data["Global Quote"]
  // Creata a variable to store the price data
  var price = stock["05. price"]
  // Create a variable to combine the words "Stock Price" and the price data
  var stockText = "STOCK PRICE: " + price
  // Put the stockText text into an HTML item with the label "stock"
  $('#stock').html(stockText)
});

