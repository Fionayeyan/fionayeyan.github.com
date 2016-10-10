$('.input').click(function(){
    if (this.name == 'username' && this.value =='姓名') {
        this.value = '';
    } else if (this.name == 'email' && this.value =='邮件') {
        this.value = '';
    } else if (this.name == 'info' && this.value =='信息') {
        this.value = '';
    }
}).blur(function () {
    if (this.value.length == 0) {
        if (this.name == 'username') {
            this.value = '姓名';
        } else if (this.name == 'email') {
            this.value = '邮件';
        } else {
            this.value = '信息';
        }
    }
});

$('#email').on({
    keyup: function (){
        handleIfCanSubmit();
    },
    blur: function (){
        handleIfCanSubmit();
    }
})

$(':submit').click(function(){
    if (validSubmit()) {
        markSendTime();
        enableSubmitBtn(false);
        $.ajax({
            url:'./sendmail.php',
            data:'username='+$('#username').val()+'&email='+$('#email').val()+'&info='+$('#info').val(),
            type:'post',
            //async : false,
            success:function(data) {
                showSuccessMsg('您的邮件已经成功发出，我们收到后会尽快与您联系！');
            },
            error : function() {console.log(5);
                alert("邮件发送异常，请与客服联系！");
            }
        });
    }

    return false;
});

function showSuccessMsg(msg){
    $('.info .success-info').remove();
    var div = $('<div class="success-info" style="display: none">' + msg + '</div>');
    $('.info').append(div);
    $(div).slideDown('slow');
    window.setTimeout(function(){
        $(div).slideUp('slow');
    }, 5000)
}

function checkEmail(){
    var email = $('#email').val();
    var pattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return pattern.test(email);
}

function validSubmit() {
    if (checkEmail() && checkSendFreq()) {
        return true;
    } else {

        return false;
    }
}

function handleIfCanSubmit() {
    if (validSubmit() == true) {
        enableSubmitBtn(true);
    } else {
        enableSubmitBtn(false);
    }
}
function enableSubmitBtn(enable){
    if (enable == true) {
        $(':submit').attr('disabled', false).removeClass('btnerror').addClass('btn');
    } else {
        $(':submit').attr('disabled', true).removeClass('btn').addClass('btnerror');
    }
}

function checkSendFreq() {
    var ret = true;
    var lastSendTime = $.cookie('lastSend');
    if (typeof lastSendTime == 'string' || typeof lastSendTime == 'number') {
        lastSendTime = parseInt(lastSendTime);

        var date = new Date();
        var nowTime = date.getTime();
        if (nowTime < lastSendTime + 10 * 60 * 1000) {
            ret = false;
        }
    }
    console.info(lastSendTime);
    console.info(ret);
    return ret;
}

function markSendTime() {
    var date = new Date();
    $.cookie('lastSend', date.getTime(), { expires: 1 });
}