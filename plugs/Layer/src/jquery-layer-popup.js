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
		init: function(){
			var self = this;
			var elm = self.elm;
			var triggerType = self.opts.triggerType;
			elm.on(triggerType,function(){
				self.show();
			});
		},
		render: function(){
			var self = this;
			var opts = self.opts;
			var content = opts.content;
			var title = opts.title;
			var btns = opts.btns;
			var layer = self.layer = $(opts.template);
			var layerBody = layer.find('[layer-holder="body"]');
			var layerHeader = layer.find('[layer-holder="header"]');
			var layerClose = layer.find('[layer-holder="close"]');
			var layerFooter = layer.find('[layer-holder="footer"]');
			var closeCallback = opts.close;
			self.renderBtns(btns,layerFooter);
			layerHeader && layerHeader.html(title);
			layerBody && layerBody.html(content);
			layerClose.on('click',function(){
				closeCallback();
				self.close();
			});
			$(document.body).append(layer);
			self.rendered = true;
		},
		renderBtns: function(btns,btnwrapper){
			var self = this;
			if(btns.length){
				var btnHtml = $('<div/>');
				for(var i = 0, len = btns.length; i<len; i++){
					$btn = $('<button class="ui-layer-btn">' + btns[i].text + '</button>');
					btnFn = btns[i].callback;
					btns[i].className && $btn.addClass(btns[i].className);
					btnHtml.append($btn);
					$btn.on('click',{callback: btnFn},function(event){
						event.data.callback();
					});
				}
				btnwrapper.html(btnHtml);
			}
		}

	});

	$.fn.popup = function(setting){
		return new Popup(this,setting);
	};

});

