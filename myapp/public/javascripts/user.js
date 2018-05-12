var storyHouse = false;
var sweetHouse = false;
var story = false;
var sweet = false;
$(function () {
  $("#left").click(moveOut).hover(showIntroduction, hideIntroduction);
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
  if ($(this).attr("id") == "left") {
    storyHouse = true;
    setTimeout(function () {
      $(".main #left").children(".title1").html('故事');
      $(".main #left").children(".star").attr("src", "images/book.png");
      $(".main #right").children(".title1").html('酒');
      $(".main #right").children(".star").attr("src", "images/wine.png");
      $(".main #left").removeClass("fadeOutLeft").addClass("zoomIn");
      $(".main #right").removeClass("fadeOutRight").addClass("zoomIn");
      //$("<img/>").attr("src", imgs[counter]).addClass("animated zoomIn").insertBefore($(".center p"));
    }, 1000);
  }
  if ($(this).attr("id") == "right") {
    sweetHouse = true;
    setTimeout(function () {
      $(".main #left").children(".title1").html("糖果");
      $(".main #left").children(".star").attr("src", "images/candy.png");
      $(".main #right").children(".title1").html("贩卖机");
      $(".main #right").children(".star").attr("src", "images/machine.png");
      $(".main #left").removeClass("fadeOutLeft").addClass("zoomIn");
      $(".main #right").removeClass("fadeOutRight").addClass("zoomIn");
      //$("<img/>").attr("src", imgs[counter]).addClass("animated zoomIn").insertBefore($(".center p"));
    }, 1000);
  }
}

function submit() {
  var niming = $("#niming").val();
  var content = $("#content").val();
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