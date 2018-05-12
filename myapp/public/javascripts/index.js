$(function () {
    $(".input_cover").mousedown(function () {
        $(this).hide();
        $(this).siblings("input").addClass("cur");
        $("#sercHead").focus();
        return false;
    })
    $("#sercHead").blur(function () {
        $(this).removeClass("cur");
        if ($(this).val() == '') {
            $(this).siblings(".input_cover").show();
        }
    })
    $('#signin').click(function (event) {
        event.preventDefault();
        var userName = $('#userName').val();
        var passWord = $('#password').val();
        $.ajax({
            url: '/',
            type: 'POST',
            dataType: "jsonp",
            data: {
                username: userName,
                password: passWord
            },
            statusCode: {
                200: function () {
                    $("#warning").find("input").val("");
                    $("#warning").css("opacity", "0");
                    window.location.href = "/user";
                },
                404: function () {
                    $("#warning").css("opacity", "1");
                    $('#warning').find('input').val('错误的用户名或者密码');
                }
            }


        });
    });
    $('#register').click(function (event) {
        event.preventDefault();
        window.location.href = "regist";
    })
});