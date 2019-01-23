
$(document).ready(function () {

    $('#register').click(function () {
        var error_name = '';
        var error_email = '';
        var error_pwd = '';
        var error_confirmPwd = '';
        var error_phone = '';
        var email_regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
        var phone_regex = /^\d{10}$/;
        var name_regex = /[A-Z\.\-'\s]*/i;

        if ($.trim($('#name').val()).length == 0) {
            error_name = 'Name is required';
            $('#error_name').text(error_name);
            $('#name').addClass('has-error');
        }
        else {
            if (!name_regex.test($('#email').val())) {
                error_email = 'Invalid name';
                $('#error_name').text(error_name);
                $('#name').addClass('has-error');
            }
            else {
                error_name = '';
                $('#error_name').text(error_name);
                $('#name').removeClass('has-error');
            }
        }

        if ($.trim($('#email').val()).length == 0) {
            error_email = 'Email is required';
            $('#error_email').text(error_email);
            $('#email').addClass('has-error');
        }
        else {
            if (!email_regex.test($('#email').val())) {
                error_email = 'Invalid email';
                $('#error_email').text(error_email);
                $('#email').addClass('has-error');
            }
            else {
                error_email = '';
                $('#error_email').text(error_email);
                $('#email').removeClass('has-error');
            }
        }

        if ($.trim($('#mobile').val()).length != 10) {
            error_phone = 'Enter 10 digit contact number';
            $('#error_phone').text(error_phone);
            $('#mobile').addClass('has-error');
        }

        else {
            if (!phone_regex.test($('#mobile').val())) {
                error_phone = 'Invalid contact number';
                $('#error_phone').text(error_phone);
                $('#mobile').addClass('has-error');
            }

            else {
                error_phone = '';
                $('#error_phone').text(error_phone);
                $('#mobile').removeClass('has-error');
            }
        }

        if ($.trim($('#pwd').val()).length == 0) {
            error_pwd = 'Password is required';
            $('#error_pwd').text(error_pwd);
            $('#pwd').addClass('has-error');
        }
        else {
            error_pwd = '';
            $('#error_pwd').text(error_pwd);
            $('#pwd').removeClass('has-error');
        }

        if ($.trim($('#confirmPwd').val()).length == 0) {
            error_confirmPwd = 'Confirm password is required';
            $('#error_confirmPwd').text(error_confirmPwd);
            $('#confirmPwd').addClass('has-error');
        }
        else {
            if (!$('#confirmPwd').val().equals('#pwd')) {
                error_confirmPwd = 'Invalid confirm password';
                $('#error_confirmPwd').text(error_confirmPwd);
                $('#confirmPwd').addClass('has-error');
            }
            else {
                error_confirmPwd = '';
                $('#error_confirmPwd').text(error_confirmPwd);
                $('#confirmPwd').removeClass('has-error');
            }
        }

        if (error_name !== 0 || error_phone != 0 || error_email != 0 || error_pwd != 0 || error_confirmPwd != 0) {
            return false;
        }

        else {
            $('#name').removeClass('form-group');
            $('#email').removeClass('form-group');
            $('#mobile').removeClass('form-group');
            $('#pwd').removeClass('form-group');
            $('#confirmPwd').removeClass('form-group');

        }
    });

    $("#cancel").click(function () {
        $("form-group").reset();
    });



    $("#mobile").keypress(function (event) {


        if (!(event.which >= 0 && event.which <= 9)) {


            return false;
        }
        return true;
    });

    function myfunction() {
        document.getElementById("form").reset();
    }

    $("#submit").click((event) => {
        $.ajax({

            url: "",






        });



    });


});
