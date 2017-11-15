function bemLoad(time,alpha,imgW){
	/*
	 * 必须加载的图片
	 * 必须加载的js库jquery
	 */
	/*
	 * time为加载条时间
	 * alpha为背景透明度
	 * var load = new bemLoad(200,0.75);创建加载类
	 * load.close();为关闭加载层
	 */
	$('body').append('<div id="BemLoad" style="top: 0; left:0;z-index:1000; position: fixed;width: 100%;height: 100%;background-color: rgba(0,0,0,'+alpha+');display: flex;justify-content: center;align-items: center;flex-direction: column;display: -webkit-flex;-webkit-align-items: center;-webkit-justify-content: center;-webkit-flex-direction: column;"><img src="LoadImg/load0.png" style="width:'+imgW+'px"/></div>');
	var self = this;
	self.count = 1;
	self.time = setInterval(function(){
		$('#BemLoad img').attr('src','LoadImg/load'+(self.count++)+'.png');
		if(self.count == 9){
			self.count =0;
		}
	},time);
}
bemLoad.prototype.close=function(){
	var self =this;
	clearInterval(self.time)
	$('#BemLoad').remove();
}
