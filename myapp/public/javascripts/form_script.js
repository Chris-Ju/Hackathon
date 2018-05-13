
if ($('.send_message_form').attr('action') && ($('.send_message_form').attr('action') != '')) {
    message_server_url = $('.send_message_form').attr('action');
}



$(function () {

    var $ajax = {
        sendMessage: function (p) {
            var name = $('#mes-name').val();
            var email = $('#mes-email').val();
            var content = $('#mes-text').val();
            $.ajax({
                url: '/ajaxserver',
                type: 'post',
                dataType: 'jsonp',
                data: {
                    name: name,
                    email : email,
                    content : content
                },
                statusCode: {
                    200: function (data) {
                        $('.send_message_form input').val("");
                        $('.send_message_form textarea').val("");
                        $('.message-ok').removeClass('invisible');
                    },
                    404: function (jqXHR, textStatus, errorThrown) {
                        $('.message').html('Error when sending email.');

                    }
                }
                /* CALLBACK FOR SENDING EMAIL GOEAS HERE */
            });
        }
    };


    $('.send_message_form').submit(function (event) {
        event.preventDefault();
        $ajax.sendMessage(this);
    });

});