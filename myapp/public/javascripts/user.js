$(function(){
  $("#left").click(moveOut);
  $("#right").click(moveOut);
});
function moveOut() {
  $("#left").removeClass("zoomIn").addClass("fadeOutLeft");
  $("#right").removeClass("zoomIn").addClass("fadeOutRight");
  setTimeout(function () {
    $(".main #left").remove();
    $(".main #right").remove();
    //$("<img/>").attr("src", imgs[counter]).addClass("animated zoomIn").insertBefore($(".center p"));
  }, 500);
}