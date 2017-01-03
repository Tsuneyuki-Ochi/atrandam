(function(global, undefined) {
	'use strict';

	var EventEmitter = function() {
		this._handlers = {};
	};

	EventEmitter.prototype.on = function(type, handler) {
		console.log("EventEmitter.on: " + type);
		console.log(this._handlers);
		// if (typeof this._handlers[type] === 'undefined') {
		if (this._handlers.hasOwnProperty('CHANGE')) {
			this._handlers[type] = [];
		}
		this._handlers[type].push(handler);
	};

	EventEmitter.prototype.emit = function(type, data) {
		var handlers = this._handlers[type] || [];
		for (var i = 0, len = handlers.length; i < len; i++) {
			var handler = handlers[i];
			handlers.call(this, data);
		}
	};
	global.EventEmitter = EventEmitter;
})(window);
