/*
* Author: Sandy Liang
* Date: 2014-11-17
*/
define(function(require){
	var $ = require('jquery');
	var config = require('../src/jquery-layer-config');
	function Layer(){

	}
	$.extend(Layer.prototype,{
		init: function(){

		},		
		show: function(){

		},
		close: function(){

		},
		position: function(){

		},
		destroy: function(){

		},
		render: function(){

		},
		event: function(){
			
		}

	});

	$.fn.layer = function(config){
		console.log(config,this);
	};

});

