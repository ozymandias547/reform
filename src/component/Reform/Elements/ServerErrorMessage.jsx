var React = require('react');

module.exports = function(formValues, emitter) {
	return React.createClass({
		
		getInitialState: function() {
			return {
				show: true,
				message: ""
			}
		},
		
		onNewServerError: function(newError) {
			this.setState({
				message: newError
			})
		},

		componentDidMount: function() {
			emitter.on("newServerError", this.onNewServerError);
		},

		render: function() {
			return (
				<div>{this.state.message}</div>
			)
		}
	})
}