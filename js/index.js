$(function(){ 
//Gnb 영역
var GnbBtn = $('#menu > ul > li');

GnbBtn.eq(0).find('a').on('mouseover', function(){

GnbBtn.eq(0).siblings().find('a').css({color:'#000'});
GnbBtn.eq(0).find('a').css({color:'#ff3baf'});
$('#gnb_mememi').siblings().css({display:'none'});
$('#gnb_mememi').css({display:'block'});
$('#gnbWrap').stop().animate({height:'335px'}, 100);      

});
GnbBtn.eq(1).find('a').on('mouseover', function(){

GnbBtn.eq(1).siblings().find('a').css({color:'#000'});
GnbBtn.eq(1).find('a').css({color:'#ff3baf'});
$('#gnb_kitchen').siblings().css({display:'none'});
$('#gnb_kitchen').css({display:'block'});
$('#gnbWrap').stop().animate({height:'335px'}, 100);      

});
GnbBtn.eq(2).find('a').on('mouseover', function(){

GnbBtn.eq(2).siblings().find('a').css({color:'#000'});
GnbBtn.eq(2).find('a').css({color:'#ff3baf'});
$('#gnb_caffe').siblings().css({display:'none'});
$('#gnb_caffe').css({display:'block'});
$('#gnbWrap').stop().animate({height:'335px'}, 100);      

});
GnbBtn.eq(3).find('a').on('mouseover', function(){

GnbBtn.eq(3).siblings().find('a').css({color:'#000'});
GnbBtn.eq(3).find('a').css({color:'#ff3baf'});
$('#gnb_lifestyle').siblings().css({display:'none'});
$('#gnb_lifestyle').css({display:'block'});
$('#gnbWrap').stop().animate({height:'335px'}, 100);      

});
GnbBtn.eq(4).find('a').on('mouseover', function(){

GnbBtn.eq(4).siblings().find('a').css({color:'#000'});
GnbBtn.eq(4).find('a').css({color:'#ff3baf'});
$('#gnb_trend').siblings().css({display:'none'});
$('#gnb_trend').css({display:'block'});
$('#gnbWrap').stop().animate({height:'335px'}, 100);      

});
GnbBtn.eq(5).find('a').on('mouseover', function(){

GnbBtn.eq(5).siblings().find('a').css({color:'#000'});
GnbBtn.eq(5).find('a').css({color:'#ff3baf'});
$('#gnb_collectiveshop').siblings().css({display:'none'});
$('#gnb_collectiveshop').css({display:'block'});
$('#gnbWrap').stop().animate({height:'335px'}, 100);      

}); 

$('#hd_wrap').on('mouseleave', function(){

GnbBtn.find('a').css({color:'#000'});
$('.gnbMenu').css({display:'none'});
$('#gnbWrap').stop().animate({height:'0'}, 100);

});



//Gnb 스크롤다운
var hd_wrap = $('#hd_wrap');	
var hd_wrap2 = $('#hd_wrap2');

$(window).scroll(function(){
var h=$(window).scrollTop();	   

if(h > 680){
hd_wrap.css({position:'fixed',top:'0'});
hd_wrap2.css({display:'block'});
// $('#logoImg').css({display:'block'});

//hd_wrap.stop().animate({opacity:'0'}, 0);
//hd_wrap.stop().animate({opacity:'1'}, 200);

}else{
hd_wrap2.css({display:'none'});
hd_wrap.css({position:'relative',top:'0'});
// $('#logoImg').css({display:'none'});
//hd_wrap.stop().animate({opacity:'1'}, 0);


} 

});
$(window).trigger('scroll');







//gnbSmall 영역 



$('.gnbSmallWrap').hide();

$('#pullDownBtn').click(function(){		

if($(this).hasClass('on')==false){ 
$(this).addClass('on');
$(this).find('a').css({backgroundImage:'url(./images/common/menuTool05.png)', backgroundSize:'14px 14px'});
$('.gnbSmallWrap').slideDown();
}else{
$(this).removeClass('on');
$(this).find('a').css({backgroundImage:'url(./images/common/menuTool04.png)', backgroundSize:'18px 20px'});
$('.gnbSmallWrap').slideUp();
}
return false;
});


var gnbSmallUlBtn = $('.gnbSmallUl > li > a');
var plus = $('.gnbSmallUl > li > a > .plus');
var minus = $('.gnbSmallUl > li > a > .minus');

$('.gnbSmallUlInner').hide();

gnbSmallUlBtn.click(function(){
if($(this).hasClass('on')==false){ 
gnbSmallUlBtn.each(function(){
if($(this).hasClass('on')){
$(this).removeClass('on');	
$(this).find(minus).css({display:'block'});
$(this).next('.gnbSmallUlInner').slideUp('fast');
}
});

$(this).addClass('on');
$(this).find(minus).css({display:'none'});
$(this).next('.gnbSmallUlInner').slideDown('fast');
}else{
$(this).removeClass('on');
$(this).find(minus).css({display:'block'});
$(this).next('.gnbSmallUlInner').slideUp('fast');
}
return false;
});


/*
//클릭리서치

var clickS = $('#join > ul > #searchClick1 > a > img');
var search = $('#searchClick2');
var Writing = $('#searchClick2').find('#writing');

clickS.on('click', function(){
$(this).css({display:'none'});
Writing.css({display:'block'});

});


*/



//collectCafeBgW 배경

var hdImg = $('#allWrapper > #hd_img');
var collectBg = $('#collectCafe > #collectCafeBgW');



$(window).scroll(function(){
var h=$(window).scrollTop();
if(h < 700){
collectBg.css('display','none');
hdImg.css('display','block');	   
}else{
hdImg.css('display','none');
collectBg.css('display','block');
}

});
$(window).trigger('scroll');

//스크롤업

var scrollUp = $('#scrollUp');   

$(window).scroll(function(){
var h=$(window).scrollTop();


if(h > 300){		   
scrollUp.stop().animate({opacity:'1'},300);	   
}else{
scrollUp.stop().animate({opacity:'0'},300);
}

});
$(window).trigger('scroll');

scrollUp.on('click', function(){
$('html, body').stop().animate({scrollTop:'0'},300);     
});



//newMenu


var current = 0;
var max = 3;
var visualDivSize = 1;

var button = $('#newMenuButton > li');
var visual = $('#newMenu_1 > #newMenu_1_01').find('div');
var prev = $('#newMenu_1_01 > .prev');
var next = $('#newMenu_1_01 > .next');
var maxSize = $('#newMenu_1 > #newMenu_1_01').find('div').size();
var visualWidth = $('#newMenu_1 > #newMenu_1_01').width();


button.on({

click:function(){

var tg = $(this);

var i = tg.index();

button.removeClass('on');

tg.addClass('on');

move(i);

}

});

next.click(function(){

var n = current + 1;

if(n == visual.size()){

n = 0;

} 

move(n);

button.eq(n).trigger('click');

});



prev.click(function(){

var n = current - 1;

if(n == -1){

n = 2;

}

moveL(n);

button.eq(n).trigger('click');

});

$('#newMenu_1').on({

mouseover:function(){

clearInterval(setIntervalId);

},

mouseout:function(){

timer();

}

});



timer();

function timer(){

setIntervalId = setInterval(function(){

var n = current + 1;

if(n == visual.size()){

n = 0;

}


button.eq(n).trigger('click');

}, 6000);

}



function move(i){

if(current == i) return;



var currentEl = visual.eq(current);

var nextEl = visual.eq(i);

currentEl.css({left:0}).stop().animate({left:'-100%'});

nextEl.css({left:'100%'}).stop().animate({left:0});



current = i;

}

function moveL(i){

if(current == i) return;



var currentEl = visual.eq(current);

var nextEl = visual.eq(i);

currentEl.css({left:0}).stop().animate({left:'100%'});

nextEl.css({left:'-100%'}).stop().animate({left:0});



current = i;

}



//Collective Lifestyle Shop

var overayImg = $('.overayImg > .overayImg_on');
var overayVideo = $('.overayVideo > .overayVideo_on');

overayImg.hover(function() {

$(this).stop().animate({opacity:'1'});

}, function(){

$(this).stop().animate({opacity:'0'});

});

overayVideo.hover(function() {

$(this).stop().animate({opacity:'1'});

}, function(){

$(this).stop().animate({opacity:'0'});

});

// insta


var instaExTop = $('#instaPhotoTop > li').find('.instaExTop')
var instaExDown = $('#instaPhotoDown > li').find('.instaExDown')

instaExTop.hover(function() {

$(this).stop().animate({opacity:'1'});

}, function(){

$(this).stop().animate({opacity:'0'});

});

instaExDown.hover(function() {

$(this).stop().animate({opacity:'1'});

}, function(){

$(this).stop().animate({opacity:'0'});

});



// side


var Side01=$('#Side01');

$(window).scroll(function(){
var h=$(window).scrollTop();
if(h > 1100 && h < 3000){	   
Side01.css({position:'fixed', top:'150px'});	   
}else{
Side01.css({position:'absolute', top:'400px'});		  
}

});
$(window).trigger('scroll');

var Side02=$('#Side02');

$(window).scroll(function(){
var h=$(window).scrollTop();
if(h > 3900 && h < 4700){	   
Side02.css({position:'fixed', top:'250px'});	   
}else{
Side02.css({position:'absolute', top:'3200px'});		  
}

});
$(window).trigger('scroll');

var Side03=$('#Side03');

$(window).scroll(function(){
var h=$(window).scrollTop();
if(h > 5300 && h < 6300){	   
Side03.css({position:'fixed', top:'100px'});	   
}else{
Side03.css({position:'absolute', top:'4600px'});		  
}

});
$(window).trigger('scroll');






});
