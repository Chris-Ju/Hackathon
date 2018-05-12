var storyHouse = false;
var sweetHouse = false;
var story = false;
var sweet = false;
var dataType = "";

$(function () {
  $("#left").bind('click', clickEvent).bind('mouseenter', showIntroduction).bind('mouseleave', hideIntroduction);
  $("#right").bind('click', clickEvent).bind('mouseenter', showIntroduction).bind('mouseleave', hideIntroduction);
  $("#confirm").bind('click', submit);
});

function showIntroduction() {
  $(this).next('.intro').css('opacity', 1);
}

function hideIntroduction() {
  $(this).next('.intro').css('opacity', 0);
}

function clickEvent() {
  $("#left").removeClass("zoomIn").addClass("fadeOutLeft");
  $("#right").removeClass("zoomIn").addClass("fadeOutRight");
  if (storyHouse || sweetHouse) {
    setTimeout(function () {
      $(".div1").remove();
      $(".div2").remove();
      $(".div3").show().addClass("zoomIn");
      $(".div4").show().addClass("zoomIn");
    }, 1000);
    if ($(this).attr("id") == "left" && storyHouse) {
      story = true;
      dataType = "Story";
      $("#convleft").html("“欲说还休，欲说还休，却道天凉好个秋。”<br>我们还没学会怎么像成年人一样解决问题，却率先感受到了成年人生活的苦闷。<br>在我们的酒屋里，您可以说出自己的烦恼，现在您可以开始写下您的故事了!");
    } else if ($(this).attr("id") == "right" && storyHouse) {
      story = false;
      dataType = "Story";
      find();
    } else if ($(this).attr("id") == "left" && sweetHouse) {
      sweet = true;
      dataType = "Candy";
      $("#convleft").html("“你笑起来一定很好看。”这是糖果屋，您可以制作自己的糖果。<br>可以推荐一首开心的歌，可以是一个笑话，也可以是简单一句话。");
    } else if ($(this).attr("id") == "right" && sweetHouse) {
      sweet = false;
      dataType = "Candy";
      find();
    }
  } else if ($(this).attr("id") == "left" && !storyHouse) {
    storyHouse = true;
    setTimeout(function () {
      $(".main #left").children(".title1").html('酒客');
      $(".main #left").children(".star").attr("src", "images/book.png");
      $(".main #left").next('.intro').children("p").html('有时候，即使想借着酒劲说出一些真话，却也总是欲说还休。<br>在我们的杂货铺中，酒客可以留下你的烦恼和焦虑，<br>总有人会看到，愿意和你聊聊不一样的看法。<br>也许陌生人面前，我们反而更加能做我们自己，直面心灵。');
      $(".main #right").children(".title1").html('故事');
      $(".main #right").children(".star").attr("src", "images/wine.png");
      $(".main #right").next('.intro').children("p").html('十几二十岁的年级，我们还没学会怎么像成年人独立面对生活，我们总有各种问题。<br>我们渴望诉说，我们渴望倾听，我们有时需要做个摆渡人，渡人渡己。<br>听故事的人，可以加酒客的微信，为他解忧。');
      $(".main #left").removeClass("fadeOutLeft").addClass("zoomIn");
      $(".main #right").removeClass("fadeOutRight").addClass("zoomIn");
    }, 1000);
  } else if ($(this).attr("id") == "right" && !sweetHouse) {
    sweetHouse = true;
    setTimeout(function () {
      $(".main #left").children(".title1").html("糖果");
      $(".main #left").children(".star").attr("src", "images/candy.png");
      $(".main #left").next('.intro').children("p").html('制作糖果没有秘诀，最关键的就是用心哦~<br>将你觉得让人开心的东西放进糖果，一棵糖果就做好了呢！<br>然后你就可以等待你的糖果被人领取啦~<br>如期待后续，也可以在最后留下你的微信哦~');
      $(".main #right").children(".title1").html("贩卖机");
      $(".main #right").children(".star").attr("src", "images/machine.png");
      $(".main #right").next('.intro').children("p").html('“众生皆苦，只有你是草莓味的。”<br>看到这话的时候有没有心里一甜，黑夜也不在漫长了？<br>点击糖果贩卖机，你还能吃到更多的糖果哦~<br>如果相互感兴趣，说不定你和糖果的主人还有一段奇妙的缘分呢~');
      $(".main #left").removeClass("fadeOutLeft").addClass("zoomIn");
      $(".main #right").removeClass("fadeOutRight").addClass("zoomIn");
      //$("<img/>").attr("src", imgs[counter]).addClass("animated zoomIn").insertBefore($(".center p"));
    }, 1000);
  }
}

function find() {
  $.ajax({
    url: '/user/find' + dataType,
    type: 'POST',
    dataType: 'jsonp',
    statusCode: {
      200: function (data) {
        if (dataType == "Story") {
          $("#convleft").html("这是一位酒客的故事：<br>“" + data.content + "”<br>现在您可以写下您给这位酒客的评论了。");
        } else {
          $("#convleft").html("这是您的糖果，请拿好！<br>“" + data.content + "”<br>你笑起来一定很好看！希望你有开心的一天哦~<br>您有什么想说的话，可以附在糖果后面哦~");
        }
      }
    }
  });
}

function submit() {
  var anonymous = $("input:checkbox:checked").val();
  var content = $("#convright").val();
  var random = Math.random();
  $.ajax({
    url: '/user/insert' + dataType,
    type: 'POST',
    dataType: 'jsonp',
    data: {
      anonymous: anonymous,
      content: content,
      random: random
    },
    statusCode: {
      200: function () {
        window.location.href = "/user";
      }
    }
  });
}