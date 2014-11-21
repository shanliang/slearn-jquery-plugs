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
		var opts = $.extend(true,{},defaults,setting);
		LayerClass.call(this, opts);
		this.elm = elm;
		this.name = 'Popup';
		this.init();
	}

	Popup.prototype = new LayerClass();
	$.extend(Popup.prototype,{	
		constructor: Popup,
		init: function(){console.log('popup init')
			//绑定事件
			var self = this;
			self.event();
		},
		render: function(){
			var self = this;
			var opts = self.opts;
			var content = opts.content;
			var layer = self.layer = $(opts.template);
			var contentHolder = layer.find('[layer-holder="body"]');
			contentHolder&&contentHolder.html(content);
			$(document.body).append(layer);
			self.rendered = true;
		},
		event: function(){console.log('popup event')
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

