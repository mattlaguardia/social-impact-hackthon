console.log("connected");
var x;
$(document).ready(function(){

  $.ajax({
    url: "http://www.buzzfeed.com/api/v2/feeds/news",
    dataType: 'jsonp',
    success: function(data){
      x = data;
      console.log(data);
    },
    context: document.body
  });

  getTitle();

});


var getTitle = function(){
  for(i=0;i<=6;i++){
    var title = x.big_stories[i].content_items[0].title;
    var newDiv = document.createElement("div");
    newDiv.appendChild(title);
  }
};
