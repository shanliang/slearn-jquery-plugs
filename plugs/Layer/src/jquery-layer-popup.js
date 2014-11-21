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
			var self = this;
			var elm = self.elm;
			var triggerType = self.opts.triggerType;
			self.event(elm,triggerType,function(){
				self.show();
			});
		},
		render: function(){
			var self = this;
			var opts = self.opts;
			var content = opts.content;
			var btns = opts.btns;
			var layer = self.layer = $(opts.template);
			var layerBody = layer.find('[layer-holder="body"]');
			var layerClose = layer.find('[layer-holder="close"]');
			var layerFooter = layer.find('[layer-holder="footer"]');
			self.renderBtns(btns,layerFooter);
			layerBody&&layerBody.html(content);
			self.event(layerClose,'click',function(){
				self.close();
			});
			$(document.body).append(layer);
			self.rendered = true;
		},
		event: function(elm,triggerType,callback){console.log('popup event')
			elm.on(triggerType,function(){
				callback();
			});
		},
		renderBtns: function(btns,btnwrapper){
			if(btns.length){
				var btnHtml = '';
				for(var i = 0, len = btns.length; i<len; i++){
					
				}
				btnwrapper.html(btnHtml);
			}
		}

	});

	$.fn.popup = function(setting){
		return new Popup(this,setting);
	};

});

