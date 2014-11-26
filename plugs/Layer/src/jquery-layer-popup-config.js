/*
* Desc: Popup Config
*/
define({
	//浮出层类型，可选项:popup/tip/select/autocomplete
	type:'popup',
	title:'I\'m title',
	content:'Hello,I\'m popup!',
	//浮出层模板,	如果要自定义模板：layer-holder="***"，不能自定义，js根据此属性识别结构，其他可以随意改
	template:'<div class="ui-layer-popup"><span class="close" layer-holder="close">x</span><table><tr><td class="ui-layer-header" layer-holder="header"></td></tr><tr><td class="ui-layer-body" layer-holder="body"></td></tr><tr><td class="ui-layer-footer" layer-holder="footer"></td></tr></tbale></div>',
	//触发浮出层事件，可选：hover/click
	triggerType:'click',
	position:'center',
	//关闭浮出层右上角x触发的回调
	close:function(){
		console.log('close');
	},
	//自定义按钮,及事件
	btns:[{
			text:'Yes',
			callback:function(){
				console.log('ok');
			},
			className:'btnYes'
		},
		{
			text:'No',
			callback:function(){
				console.log('cancle');
			},
			className:'btnNo'
		}]
});