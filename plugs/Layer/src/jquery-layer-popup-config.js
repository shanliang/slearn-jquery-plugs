/*
* Desc: Config
*/
define({
	//浮出层类型，可选项:popup/tip/select/autocomplete
	type:'popup',
	content:'Hello,I\'m popup!',
	//浮出层模板
	template:'<div class="ui-layer-popup"><div class="close" layer-holder="close">x</div><table><tr class="ui-layer-header" layer-holder="header"><td></td></tr><tr><td class="ui-layer-body" layer-holder="body"></td></tr><tr><td class="ui-layer-footer" layer-holder="footer"></td></tr></tbale></div>',
	//触发浮出层事件，可选：hover/click
	triggerType:'click',
	//关闭浮出层右上角x触发的回调
	close:function(){},
	//自定义按钮,及事件
	btns:[{
			okText:'确定',
			ok:function(){}
		},
		{
			cancleText:'取消',
			cancle:function(){}
		}]
});