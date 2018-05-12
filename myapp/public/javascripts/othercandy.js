$(document).ready(function () {
    $.ajax({
      url: '/othercandy',
      type: 'POST',
      statusCode: {
        200: function (data) {
          for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var content = obj.content;
            var date = obj.date;
            var commentNumber = obj.commentNumber;
            var li = $("<li style='float:left;width:300px;'><div class='mr_zhe'><div class='mr_zhe_i' style='display:block'><p class='story'>" + content +
              "</p><div class='mr_zhe_p'><h3><span>" + date +
              "</span>评论数（" + commentNumber +
              "）</h3></div></div><div class='mr_zhe_hover' style='top:190px;display:none'><h1/><div class='mr_zhe_p'><h3><span>" + date +
              "</span>评论数（" + commentNumber +
              "）</h3></div></div></div></li>")
            $("#mr_fu").append(li);
          }
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
              $(this).find('.mr_zhe_hover').hide().stop().animate({
                top: '190px'
              }, {
                  queue: false,
                  duration: 190
                });
              return false;
            }
          });
          $('.mr_zhe').mouseover(function (event) {
            $(this).find('.mr_zhe_i').hide();
            $(this).find('.mr_zhe_hover').show().stop().animate({
              top: '190px'
            }, {
                queue: false,
                duration: 190
              });
            return false;
          });
        }
      }
    });
    $(function () {
      $(".myhome").bind("click", jumpToHome);
      $(".exit").bind("click", signOut);
      $(".mywine").bind("click", jumpToMyWine);
      $(".mycandy").bind("click", jumpToMyCandy);
    });
  
    function jumpToHome() {
      window.location.href = "/user";
    }
  
    function jumpToMyWine() {
      window.location.href = "/wine";
    }
  
    function jumpToMyCandy() {
      window.location.href = "/candy";
    }
  
    function signOut() {
      $.ajax({
        url: '/user/loginout',
        type: 'POST',
        statusCode: {
          200: function (data) {
            window.location.href = "/";
          }
        }
      });
    }
  });