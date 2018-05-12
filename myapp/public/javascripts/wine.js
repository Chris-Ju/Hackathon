$(document).ready(function () {
  $.ajax({
    url: '/wine',
    type: 'POST',
    statusCode: {
      200: function (data) {
        for (var i = 0; i < data.length; i++) {
          var obj = data[i];
          var content = obj.content;
          var date = obj.date;
          var commentNumber = obj.commentNumber;
          var random = obj.random;

          var li = $("<li id='" + random +
            "' style='float:left;width:300px;'><div class='mr_zhe'><img src='images/star_y.png' class='star animated'/><div class='mr_zhe_i' style='display:block'><p class='story'>" + content +
            "</p><div class='mr_zhe_p'><h3><span>" + date +
            "</span>评论数（" + commentNumber +
            "）</h3></div></div><div class='mr_zhe_hover' style='top:190px;display:none'><h1/><div class='mr_zhe_p'><h3><span>" + date +
            "</span>评论数（" + commentNumber +
            "）</h3></div></div></div></li>");
          $("#mr_fu").append(li);
          li.bind('click', function () {
            var random = $(this).attr('id');
            $.ajax({
              url: '/wine/comment',
              type: 'POST',
              dataType: 'jsonp',
              data: {
                random: random
              },
              statusCode: {
                200: function (data) {
                  var arr=eval(data.responseText);
                  for(var i=0;i<arr.length;i++){
                    var obj=arr[i];
                    console.log(obj);
                  }
                }
              }
            });
          });
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
            $(this).children('.mr_zhe').children('.star').removeClass('zoomIn').hide();            
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
          $(this).children('.star').show().addClass('zoomIn');
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