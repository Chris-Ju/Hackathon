$(function(){
  $("#left").click(moveOut);
  $("#right").click(moveOut);
});
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
  $.ajax({
    url: '/regist',
    type: 'POST',
    dataType: 'jsonp',
    data: {
      username: username,
      password: password,
      phone: phone,
      email: email
    },
    statusCode: {
      200: function () {
        deleteWarning();
        window.location.href = "/";
      }
    }
  });
}