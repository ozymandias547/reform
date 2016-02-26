var React = require('react');

module.exports = function(formValues, emitter) {
	return React.createClass({
		
		getInitialState: function() {
			return {
				show: false
			}
		},
		
		onNewError: function(inputName) {
			if (this.props.forName === inputName) {
				this.setState({show: true})
			}
		},

		componentDidMount: function() {
			emitter.on("error", this.onNewError);
		},

		render: function() {
			return (
				<div>{this.state.show ? (
					<div>An error has occurred!</div>
				) : null}</div>
			)
		}
	})
}