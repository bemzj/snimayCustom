$(function(){
	//选择类型
	$('.choice ul li').on('click',function(){
		$(this).find('a').addClass('aActive');
		$(this).siblings('li').find('a').removeClass('aActive');
	});
	//设置没有相关结果
	setTimeout(function(){
		$('.noResult').height($(window).height()-$('.pHead').height()-$('.choice').height());
	},200);
});