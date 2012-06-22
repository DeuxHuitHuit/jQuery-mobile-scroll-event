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
	
	// name
	name = 'mobile-scroll-event',
	
	// namespace
	ns = '.' + name,
	
	// log/err prefix,
	prefix = '[' + name + ']',
	
	// Default options
	_defaults = {
		ua: { // customize valid platforms. Set to null or false to activate everywhere
			iphone: /iPhone/g,
			ipod: /iPod/g,
			ipad: /iPad/g,
			ios: /iOs/g
		},
		touchElement: 'body',
		doScroll: true,      // if false, only the event will get broadcast
		axis: 'y',           // x || y || xy
		max: 'auto',         // auto || value || {x:value, y:value}
		eventName: 'scroll', // customize to your need
		
		debug: true // ONLY VALID IN DEFAULTS
	},
	
	// Instances holder
	_inst = {},
	
	// private functions
	_log = function (s) {
		if (!!_defaults.debug && !!window.console && !!console.log) {
			console.log(prefix + ' ' + s);
		}
	},
	_err = function (s) {
		if (!!_defaults.debug && !!window.console && !!console.err) {
			console.err(prefix + ' ' + s);
		}
	},
	
	_getMaxForAxis = function (axis, options) {
		var max = 0, isAuto = false;
		if ($.isPlainObject(options)) {
			max = options.max[axis];
		} else if ($.isNumeric(optios.max)) {
			max = options.max;
		}
		
		if (max === 'auto') {
			// handle auto
		}
		
		return max;
	},
	
	_createUID = function () {
		var S4 = function() {
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	},
	
	_getElementUID = function (elem) {
		var data = elem.data();
		if (!data.uid) {
			data.uid = _createUID();
		}
		return data.uid;
	},
	
	_registerInstance = function(scrollElem, touchElement) {
		var toucId = _getElementUID(touchElement),
			elemId = _getElementUID(scrollElem);
		
		if ($.isArray(_inst[toucId])) {
			_inst[toucId].push(elemId);
		} else {
			_inst[toucId] = [elemId];
		}
	},
	
	_tiggerScrollEvent = function (elem, options) {
		elem.trigger(options.eventName + ns, []);
	},
	
	// Touch event handlers
	_touchstart = function (e) {
		var t = $(this);
	},
	_touchend = function (e) {
		var t = $(this);
	},
	_touchdrag = function (e) {
		var t = $(this);
	},
	
	_hookOne = function (elem, options) {
		// register globally
		_registerInstance(elem, options.touchElement);
		
		// hook up touchElement touch events
		
		
	},
	
	// Actual Plugin function
	_mobilescroll = function (options) {
		if (!this.length || !this.each) {
			return this;
		}
		
		// get defaults into options
		options = $.extend({}, _defaults, options);
		
		// insure we are dealing with jquery object
		options.touchElement = $(options.touchElement);
		
		// insure touchElement is a single object
		if (options.touchElement.length !== 1) {
			_err('touchElement must be unique. Can not continue.');
			return this;
		}
		
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
				_getMaxForAxis: _getMaxForAxis,
				
				_createUID: _createUID,
				_getElementUID: _getElementUID,
				
				_tiggerScrollEvent: _tiggerScrollEvent
			}
		}
	};
	
	// Make our plugin public
	$.fn.extend(_plugin);
	// Make our defaults public
	$.extend(_static_plugin);
	
})(jQuery);