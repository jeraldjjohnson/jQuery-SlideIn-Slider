$("h1").click(function(){
  var imgId = $(this).attr("data-id");
 $(".display").removeClass("active");
 $(".display"+"#"+imgId).addClass("active");
 $("h1").removeAttr("class");
 $(this).addClass("selected");
});
