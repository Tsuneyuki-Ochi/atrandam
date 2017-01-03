(function(global, Super, undefined) {
	'use strict';

	var Store = function(dispatcher) {
		Super.constructor();
		this.count = 0;
		// <--- observe event.
		dispatcher.on("countUp", this.onCountUp.bind(this));
	};

	Store.prototype = Object.create(Super.prototype, {
		constuructor: {
			value: Store
		}
	});

	Store.prototype.getCount = function() {
		return this.count;
	};

	Store.prototype.onCountUp = function(count) {
		this.count = count;
		// emit "CHANGE" ---> self
		this.emit("CHANGE");
		
	};
	global.Store = Store;

})(window, window.EventEmitter);
