var React = require('react');
var Reform = require('../Reform/Reform.jsx');

var App = React.createClass({
	
	getInitialState: function() {
		return {
			serverErrorMessage: "werwe"
		}
	},

	render: function() {
		
		var _this = this;

		return (
			<div>
				<button onClick={this.setErrorMessage}>do it</button>
				<button onClick={this.resetErrorMessage}>do it</button>
				<Reform onSubmit={this.onSubmit} serverErrorMessage={this.state.serverErrorMessage}>
					{function(R) { return (
					<div>
						<div className="form-group">
							<label htmlFor="anInputValue">Input 1: </label>
							<R.TextInput name="anInputValue" id="anInputValue" isRequired/>
							<R.ErrorMessage forName="anInputValue" />
						</div>
						<div className="form-group">
							<label htmlFor="anInputValue1">Input 2: </label>
							<R.TextInput name="anInputValue1" id="anInputValue1" isRequired/>
							<R.ErrorMessage forName="anInputValue1"/>
						</div>
						<R.ServerErrorMessage />
					</div>
					)}.bind(this)}
				</Reform>
			</div>
		)
	},
	onSubmit: function(values) {
		console.log(values);
	},
	setErrorMessage: function() {
		this.setState({
			serverErrorMessage: "wowowowo" + Math.random()
		})
	},
	resetErrorMessage: function() {
		this.setState({
			serverErrorMessage: ""
		})
	}
});

module.exports = App;