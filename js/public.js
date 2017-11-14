$(function(){
	
});
//通用弹窗
function popw(fp,sp,index,callBack,e){
	/*
	 * fp为提示标题
	 * sp为提示内容
	 * index的选择为1,2即弹窗选项为一个（确定）或者两个（确定与取消）
	 * callBack为两个按钮时传入的执行功能的函数
	 */
	/*
	 * 例子：
	 * popw("温馨提示","很高兴为您解决问题！",2,function(){
		window.location.href='index.html';
		});
	 */
	$('body').append('<div class="popWindow"><div class="popBox"><ul><li><p class="firstp">'+fp+'</p></li><li><p class="secondp">'+sp+'</p></li><li><div class="onlyOne" style="display: none;"><button class="confirm">确定</button></div><div class="onlyTwo"><span></span><div class="oLeft floatl"><button class="ok">确定</button></div><div class="oRight floatr"><button class="confirm" >取消</button></div><div class="clearBoth"></div></div></li></ul></div></div>');
	//关闭弹窗事件
	$('.confirm').on('click',function(){
		$('.popWindow').remove();
		if(index==1)
		{
			callBack();
		}	
	});	
	if(index==2)
	{	
		$('.onlyOne').hide();
		$('.onlyTwo').show();
		$('.ok').on('click',function(){
			$('.popWindow').remove();
			callBack();
		});
	}else{
		$('.onlyOne').show();
		$('.onlyTwo').hide();
	}
	
}
