$(function(){
	//客户信息和沟通记录
	$(function(){
		//沟通记录
		$('.cRecode').bind('click',function(){
			$(this).addClass('bActive');
			$(this).attr('disabled','disabled');
			$('.cMessage').removeClass('bActive').removeAttr('disabled');
			$('.history').show();
			$('.messageOut').hide();
			$('.btns').hide();
		});
		//客户信息
		$('.cMessage').bind('click',function(){
			$(this).addClass('bActive');
			$(this).attr('disabled','disabled');
			$('.cRecode').removeClass('bActive').removeAttr('disabled');
			$('.history').hide();
			$('.messageOut').show();
			$('.btns').show();
		});
	});
});