(function(global, undefined) {
	'use strict';

	var ActionCreator = function(dispatcher) {
		this.dispatcher = dispatcher;
	};

	ActionCreator.prototype.countUp = function(data) {
		this.dispatcher.emit("countUp", data);
	};
	global.ActionCreator = ActionCreator;
})(window);
