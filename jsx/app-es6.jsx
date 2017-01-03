(function(global, undefined) {
	'use strict';

	var dispatcher = new EventEmitter();
	var action = new ActionCreater(dispatcher);
	var store = new Store(dispatcher);

	export default class Component extends React.Compornent {
		constructor(props) {
			super(props);
			this.state = {count: store.getCount};
			// <---- Observe store's change
			store.on("CHANGE", () => {
				this._onChange();
			});
		},
		_onChange() {
			console.trace();
			this.setState({count: store.getCount()});
		},
		tick() {
			action.countUp(this.state.count + 1);
		},
		render() {
			return (
				<div>
					<button onChange={this._onChange}>Count Up</button>
				</div>
			);
		}
	}

	ReactDOM.render(<Hello />, document.getElementById('app'));

})(window);