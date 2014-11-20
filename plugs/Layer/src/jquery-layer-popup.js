/*
* Author: Sandy Liang
* Date: 2014-11-17
* Des: Popup
*/
define(function(require){
	var $ = require('jquery');
	var defaults = require('../src/jquery-layer-popup-config');
	var LayerClass = require('../src/jquery-layer');
	function Popup(elm,setting){
		this.elm = elm;
		this.opts = $.extend(true,{},defaults,setting);
		LayerClass.call(this,elm, this.opts);
		this.init();
	}

	Popup.prototype = new LayerClass();

	$.extend(Popup.prototype,{	
		constructor: Popup,
		init: function(){
			//绑定事件
			var self = this;
			self.event();
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
			});
		}

	});

	$.fn.popup = function(setting){
		return new Popup(this,setting);
	};

});

