(function(global, undefined) {
	'use strict';

	var dispatcher = new global.EventEmitter();
	var action = new global.ActionCreator(dispatcher);
	var store = new global.Store(dispatcher);

	class Component extends React.Component {
		constructor(props) {
			super(props);
			this.state = {count: store.getCount};
			// <---- Observe store's change
			console.log("constructor");
			store.on("CHANGE", () => {
				this._onChange();
			});
		}
		_onChange() {
			// console.trace();
			this.setState({count: store.getCount()});
		}
		tick() {
			action.countUp(this.state.count + 1);
		}
		render() {
			return (
				<div>
					<button onChange={this._onChange}>Count Up</button>
				</div>
			);
		}
	}

	ReactDOM.render(<Component />, document.getElementById('app'));

})(window);