$(document).ready(function () {

  /* 图片滚动效果 */
  $(".mr_frbox").slide({
    titCell: "",
    mainCell: ".mr_frUl ul",
    autoPage: true,
    effect: "leftLoop",
    autoPlay: true,
    vis: 4
  });

  /* 鼠标悬停图片效果 */
  $(".mr_zhe_hover").css("top", $('.mr_zhe').eq(0).height());
  $("li").mouseout(function (e) {
    if ((e.pageX < $(this).offset().left || e.pageX > ($(this).offset().left + $(this).width())) || (e.pageY < $(this).offset().top || e.pageY > ($(this).offset().top + $(this).height()))) {
      $(this).find('.mr_zhe_i').show();
      $(this).find('.mr_zhe_hover').hide().stop().animate({ top: '190px' }, { queue: false, duration: 190 });
      return false;
    }

  });
  $('.mr_zhe').mouseover(function (event) {
    $(this).find('.mr_zhe_i').hide();
    $(this).find('.mr_zhe_hover').show().stop().animate({ top: '190px' }, { queue: false, duration: 190 });
    return false;
  });

});