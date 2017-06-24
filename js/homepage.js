
$(".user").click(function(){
    $(".model").css("display","block");
});
$(".model-content p span").click(function(){
    $(".model").css("display","none");
});
//模态框注册
$('.model .btn2').click(function(){
    $(".model").css("display","none");
    $('.model-register').css("display","block");
});
$('.model .btn1').click(function(){
    $(".model").css("display","none");
    $('.model-login').css("display","block");
});
$(".model-content p span").click(function(){
    $(".model-login").css("display","none");
});
$(".model-content p span").click(function(){
    $(".model-register").css("display","none");
});
$(".caret").mouseover(function(){
    $(".drop-menu").css("display","block");
});
$(".drop-menu").mouseover(function(){
    $(".drop-menu").css("display","block");
});
$(".drop-menu").mouseout(function(){
    $(".drop-menu").css("display","none");
});


var $slider1 =$("#banner .slider-viewing-area");
var i=0;var index=0;
function lunBo(){
    $("#banner .slider-viewing-area>div").removeClass();
    $slider1.children()[i].className="imgone";
    i++;
    (i==5)&&(i=0);
    $(".slider-viewing-area-dian>li").removeClass("active");
    $(".slider-viewing-area-dian>li:eq("+i+")").addClass("active");
}
var timer=setInterval(lunBo,2000);
$("#banner .slider-viewing-area>div").mouseover(function(){
    clearInterval(timer);
    timer=null;
});
$("#banner .slider-viewing-area>div").mouseout(function(){
     timer=setInterval(lunBo,2000);
});
//鼠标移到箭头a时清除定时器
    $("#banner a.imgA").mouseover(function(){
        clearInterval(timer);
    });
    $("#banner a.imgA").mouseout(function(){
        timer=setInterval(lunBo,2000);
    });
$("#banner .previous").click(function(){

    var $div = $("div .imgone");
    if($div.prev()!=''){
        $div.prev().addClass("imgone").siblings().removeClass("imgone");
    }else{
        return
    };

})
$("#banner .next").click(function(){
   var $div = $("div .imgone");
    if($div.next()!=''){
        $div.next().addClass("imgone").siblings().removeClass("imgone");
        i++;
        if(i<5){
            $(".slider-viewing-area-dian>li").removeClass("active");
            $(".slider-viewing-area-dian>li:eq("+i+")").addClass("active");
        }

    }else{
        return
    };
})


//img-slider-list01 轮播

var leftA=document.getElementsByClassName("left-a")[0];
var rightA=document.getElementsByClassName("right-a")[0];
leftA.onclick=function(e){
    e.preventDefault();
    $(".img-slider-list01").css("left","0");
    $(".img-slider-list02").css("left","680px");


};

rightA.onclick=function(e){
    e.preventDefault();
    $(".img-slider-list01").css("left","-680px");
    $(".img-slider-list02").css("left","0px");
}
$("#top .navtwo ul li a").mouseenter(function(e){
    console.log(1);
    e.preventDefault();
    $("#top .navtwo ul li a").removeClass("navtwo-border");
    $(this).addClass("navtwo-border");
})
$("#btn3").click(function(){
    $(this).text("已签到");
    $(this).css("background","#aaf")
})
$(".first:gt(0)").hide();
//表单验证
$(function(){
    var regTel = /^1[34578]\d{9}$/;
    var regUpwd = /^[0-9a-zA-Z]{6,16}$/;

    $("#register-tel").blur(function(){
        var t = $("#register-tel").val();
        if(!regTel.test(t)){
            $(this).next().css('visibility','visible');
            return false;
        }
    })
    $("#register-upwd").blur(function(){
        var u = $("#upwd").val();
        if(!regUpwd.test(u)){
            $(this).next().css('visibility','visible');
            return false;
        }
    })
    function random(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }
    $("#code").click(function(){
        var n = random(1000,4000);
        $("#code").html(n);
    })
    $("#vcode").blur(function(){
        var v = $("#vcode").val();
        if($("#code").html()!=v){
            $("#code").html(random(1000,4000));
            return false;
        }
    })
})
//返回顶部
$(window).scroll(
    function(){
        if(document.body.scrollTop>=800){
            $("#toTop").css('display','block');

        }else{
            $("#toTop").css('display','none');
        }
    }
)
//底部播放器
$('.m-playbar').mouseenter(function(){
    $(this).css('bottom',0);
})
$('.m-playbar').mouseleave(function(){
    $(this).css('bottom',-46);
})
$('.btn').on('click','.play',function () {
    $(this).removeClass("play");
    $(this).addClass('wait').attr('title','暂停');
    $("#bgMusic")[0].play();
})
$('.btn').on('click','.wait',function () {
    $(this).removeClass("wait");
    $(this).addClass('play').attr('title','播放');
    $("#bgMusic")[0].pause();
})


