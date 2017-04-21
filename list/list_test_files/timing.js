var study_time = 0;
var mark = '';

function timing_heart() {
    $.get("index.php?c=home&a=timing_heart","mark=" + mark,function(data){
        study_time=data;
    });
}

function update_time() {
    $('#study_time').html(T2S(study_time));
    study_time++;
}

function get_mark() {
    $.get("./index.php","c=home&a=get_mark",function(data){
        if(data=='NOTLOGIN') {
            $("#login_box").html('<div class="login"><a href="index.php?c=home&a=login">登录入口</a></div>');
        }
        else {
            data = data.split(",")
            name = data[0];
            study_time = data[1];
            mark = data[2];
            $("#login_box").html('<span style="color:#666; margin-left:20px;">欢迎您，' + name + '  您已经在线学习了<span id="study_time">' + T2S(study_time) + '</span></span><div class="login"><a href="index.php?c=home&a=logout">注销</a></div>');
            window.setInterval(update_time, 1000);
            window.setInterval(timing_heart, 90000);
        }
    });
}

function T2S(online) {
    var sec = parseInt(online % 60);
    online /= 60;
    var _min = parseInt(online % 60);
    online /= 60;
    var hour = parseInt(online);
    var string = hour + "小时" + _min + "分" + sec + "秒";
    return string;
}

$(function(){get_mark()});