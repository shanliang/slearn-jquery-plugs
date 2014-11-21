/*
* Author: Sandy Liang
* Date: 2014-11-17
* Des: 所有浮出层依赖的基类
*/
define(function(require){
	var $ = require('jquery');
	var defaults = require('../src/jquery-layer-config');
	function Layer(setting){
		this.opts = $.extend(true,{},defaults,setting);
		this.name = 'Layer';
	}
	$.extend(Layer.prototype,{
		constructor: Layer,
		//层Dom元素
		layer: null,
		//标记层是否打开
		open: false,
		//标记层是否已经渲染
		rendered: false,
		//初始化Layer
		init: function(){console.log('layer init');

		},		
		show: function(){console.log('show');
			var self = this;
			if(!self.rendered){
				self.render();
			}else{
				self.layer.show();
			}
			this.open = true;
		},
		close: function(){
			var self = this;
			self.layer.hide();
			this.open = false;
		},
		position: function(){

		},
		destroy: function(){

		},
		render: function(){
			var self = this;
			self.rendered = true;
		}

	});
	return Layer;
});

