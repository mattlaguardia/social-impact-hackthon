$(document).ready(function(){
  var x;
  $.ajax({
    url: "http://www.buzzfeed.com/api/v2/feeds/news",
    context: document.body
  }).done(function(data) {
    x=data;
    console.log(x);
  });


});
