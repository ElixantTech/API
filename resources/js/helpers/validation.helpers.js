$.validator.addMethod('user_unique', function( value, element ) {
    $.ajax({
        url: "https://api.elixant.io/user/emailTaken",
        type: "post",
        data: {
            email: function () {
                return $("input[name='email']").val();
            }
        },
        dataFilter: function (data) {
            var json = JSON.parse(data);
            return (!json.data.exists);
        },
    });
}, 'Somebody is already using that E-Mail.');
