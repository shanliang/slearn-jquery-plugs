/*
* Author: Sandy Liang
* Date: 2014-11-17
*/
define(function(require){
	var $ = require('jquery');
	var defaults = require('../src/jquery-layer-config');
	function Layer(elm,setting){
		this.elm = elm;
		this.opts = $.extend(true,{},defaults,setting);
		this.init();
	}
	$.extend(Layer.prototype,{
		//层Dom元素
		layer: null,
		//标记层是否打开
		open: false,
		//标记层是否已经渲染
		rendered: false,
		//初始化Layer
		init: function(){
			//绑定事件
			var self = this;
			this.event();
		},		
		show: function(){
			var self = this;
			if(!rendered){
				self.render();
			}else{
				self.layer.show();
			}
			this.open = true;
		},
		close: function(){
			this.open = false;
		},
		position: function(){

		},
		destroy: function(){

		},
		render: function(){
			var self = this;
			self.rendered = true;
		},
		event: function(){
			var self = this;
			var elm = this.elm;
			var triggerType = this.opts.triggerType;
			elm.on(triggerType,function(){
				self.show();
			})
		}

	});

	$.fn.layer = function(setting){
		return new Layer(this,setting);
	};

});

