// index.htmlに直接埋め込んだのでコメントアウト
$(document).ready(function () {

    $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeDTp8zTdfjqJdd1RAqWNSiZCHrS6IJtWuiy80DBgJcX7eyGQ/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
        0: function () {
            $(".end-message").slideDown();
            $(".submit-btn").fadeOut();
            window.location.href = "thanks.html";
        },
        200: function () {
            $(".false-message").slideDown();
        }
        }
    });
    event.preventDefault();
    });

});
