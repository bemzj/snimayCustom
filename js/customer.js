//客户信息和沟通记录
$(function() {
	//沟通记录
	$('.cRecode').bind('click', function() {
		$(this).addClass('bActive');
		$(this).attr('disabled', 'disabled');
		$('.cMessage').removeClass('bActive').removeAttr('disabled');
		$('.history').show();
		$('.messageOut').hide();
		$('.btns').hide();
	});
	//客户信息
	$('.cMessage').bind('click', function() {
		$(this).addClass('bActive');
		$(this).attr('disabled', 'disabled');
		$('.cRecode').removeClass('bActive').removeAttr('disabled');
		$('.history').hide();
		$('.messageOut').show();
		$('.btns').show();
	});
	//打开修改信息
	$('#exm').on('click', function() {
		$('#exMessage').show().stop().animate({
			left: '0%'
		}, 400);
		//自动载入信息
		$('.exAddress').text($('.address').text()); //地址
		/*
		 * 一房一厅   tid为0
		 * 两房一厅   tid为1
		 * 两房两厅   tid为2
		 * 三房一厅   tid为3
		 * 三房两厅   tid为4
		 * 四房一厅   tid为5
		 * 四房两厅   tid为6
		 * */
		var tid = $('.room').attr('tid');
		$(".roomType  option[value='" + tid + "'] ").attr("selected", true);
		/*
		 * 进店   did为0
		 * 量尺   did为1
		 * 方案   did为2
		 * 查房   did为3
		 * 复尺   did为4
		 * 成交   did为5
		 * 下单   did为6
		 * */
		var did = $('.decorate').attr('did');
		$(".decorating  option[value='" + did + "'] ").attr("selected", true);
		/*
		 * 未跟进  fid为0
		 * 跟进中   fid为1
		 * 已完成   fid为2
		 * 已取消   fid为3
		 * */
		var fid = $('.follow').attr('fid');
		$(".followType  option[value='" + fid + "'] ").attr("selected", true);
		$('.roomType').siblings('p').html($('.roomType').children('option:selected').html());
		$('.decorating').siblings('p').html($('.decorating').children('option:selected').html());
		$('.followType').siblings('p').html($('.followType').children('option:selected').html());
	});
	//关闭修改信息
	$('.backToMessage').bind('click', function() {
		$('#exMessage').stop().animate({
			left: '100%'
		}, 400, function() {
			$(this).hide();
		});
	});
	//选择
	$('.roomType').change(function(){
		$(this).siblings('p').html($(this).children('option:selected').html());		
	});
	$('.decorating').change(function(){
		$(this).siblings('p').html($(this).children('option:selected').html());		
	});
	$('.followType').change(function(){
		$(this).siblings('p').html($(this).children('option:selected').html());		
	});
	//保存
	$('#setSuccess').bind('click', function() {

		popw("温馨提示", "修改成功！", 1, function() {
			$('#exMessage').stop().animate({
				left: '100%'
			}, 400, function() {
				$(this).hide();
			});
		});
	});
	//返回上一个页面
	$('.backPrev').bind('click', function() {
		var index = window.location.search.toString().replace('?v=',"");
		if(index==0)
		{
			window.location.href='index.html';
		}else{
			window.location.href='order.html';
		}
	});
});
	
	
