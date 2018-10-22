// Adapted from https://api.jquery.com/jquery.getjson/ which I found from googling "jquery json"
$.getJSON( "https://sheetsu.com/apis/v1.0su/18195639e36f", function( data ) {
  var scores = []
  $.each( data, function( key, val ) {
     scores.push(val.nps)
  });
  
  var totalNps = nps(scores);
  $('#nps').html(totalNps + '<span class="label">NPS</span>')
  

});

// Copied directly From https://gist.github.com/mzabriskie/1ee9a8865d70e900f4e3
function nps(scores) {
  var promoters = 0;
  var detractors = 0;

  for (var i=0, l=scores.length; i<l; i++) {
    if (scores[i] >= 9) promoters++;
    if (scores[i] <= 6) detractors++;
  }

  return Math.round(((promoters / l) - (detractors / l)) * 100);
}
