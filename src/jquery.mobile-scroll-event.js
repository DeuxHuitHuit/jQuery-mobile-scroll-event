/*
*	Mobile Scroll Event v1.0 - jQuery plugin
*
*	Copyright (c) 2012 Deux Huit Huit (http://www.nitriques.com/open-source/)
*	Licensed under the MIT (https://raw.github.com/DeuxHuitHuit/jQuery-sprite-animation/master/LICENSE.txt)
*/

(function ($, undefined) {
	
	"use strict"; // es5 strict mode
	
	// Declare everything in one block
	var
	
	// Default options
	_defaults = {
		ua: {
			iphone: /iPhone/g,
			ipod: /iPod/g,
			ipad: /iPad/g,
			ios: /iOs/g
		},
		touchElement: 'body',
		axis: 'y' // x || y || xy
	},
	
	// Touch event handlers
	_touchstart = function (e) {
		
	},
	_touchend = function (e) {
		
	},
	touchdrag = function (e) {
		
	},
	
	_hookOne = function (elem, options) {
		
	},
	
	// Actual Plugin function
	_mobilescroll = function (options) {
		if (!this.length || !this.each) {
			return this;
		}
		
		// get defaults into options
		options = $.extend({}, _defaults, options);
		
		// hook each item, one by one
		return $(this).each(function (index, elem) {
			_hookOne($(elem), options);
		});
	},
	
	// Plugin objects
	_plugin = {
		mobilescroll: _mobilescroll
	},
	_static_plugin = {
		mobilescroll: {
			defaults: _defaults,
			_private: {
				
			}
		}
	};
	
	// Make our plugin public
	$.fn.extend(_plugin);
	// Make our defaults public
	$.extend(_static_plugin);
	
})(jQuery);