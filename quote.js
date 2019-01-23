// Select a random quote from data
var rand = data.quotes[Math.floor(Math.random() * data.quotes.length)];
// Capture the random quote text in a new variable called quoteText
var quoteText = rand.quote;
// Capture the random quote author in a new variable called authorText
var authorText = rand.author;
// Put quoteText content inside an html object labelled quote
$('#quote').html(quoteText); 
// Put author content inside an html object labelled author
$('#author').html(authorText);
