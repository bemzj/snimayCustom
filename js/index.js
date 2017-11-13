$(function(){
	//查看个人信息
	$('.head').on('click',function(){
		$('#personInfor').show().stop().animate({left:'0%'});
	});
	//返回主页
	$('.backPerson').bind('click',function(){
		$('#personInfor').stop().animate({left:'100%',},function(){
			$(this).hide();
		});
	});
	//修改信息
	$('.exchange').bind('click',function(){
		$('.exInput input').val($(this).prevAll('p').text());
		$('.exInput input').focus();
		$('.backP').next('p').text('修改'+$(this).text());
		$('#exchangePerson').show().stop().animate({left:'0%'});
	});
	//返回个人页面
	$('.backP').bind('click',function(){
		$('#exchangePerson').stop().animate({left:'100%',},function(){
			$(this).hide();
		});
	});
});