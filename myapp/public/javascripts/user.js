$(function(){
  $("#left").click(moveOut).hover(showIntroduction,hideIntroduction);
  $("#right").click(moveOut).hover(showIntroduction, hideIntroduction);
});
function showIntroduction() {
  $(this).next('.intro').css('opacity', 1);
}
function hideIntroduction() {
  $(this).next('.intro').css('opacity', 0);
}
function moveOut() {
  $("#left").removeClass("zoomIn").addClass("fadeOutLeft");
  $("#right").removeClass("zoomIn").addClass("fadeOutRight");
  setTimeout(function () {
    $(".main #left").removeClass("fadeOutLeft").addClass("zoomIn");
    $(".main #right").removeClass("fadeOutRight").addClass("zoomIn");
    //$("<img/>").attr("src", imgs[counter]).addClass("animated zoomIn").insertBefore($(".center p"));
  }, 1000);
}
function submit() {
  var niming=$("#niming").val();
  var content=$("#content").val();
  $.ajax({
    url: '/user',
    type: 'POST',
    dataType: 'jsonp',
    data: {
      niming: niming,
      content: content    
    },
    statusCode: {
      200: function () {
        window.location.href = "/";
      }
    }
  });
}