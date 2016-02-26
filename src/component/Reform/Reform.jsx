var React = require('react');
var ee = require('event-emitter');
var TextInput = require('./Elements/TextInput.jsx');
var ErrorMessage = require('./Elements/ErrorMessage.jsx');
var ServerErrorMessage = require('./Elements/ServerErrorMessage.jsx');

var Reform = React.createClass({
	
	displayName: "Reform",

	formValues: {},

	renderedChildren: null,

	emitter: ee({}),

	shouldComponentUpdate: function(nextProps, nextState) {
		if (this.props.serverErrorMessage !== nextProps.serverErrorMessage) {
			this.emitter.emit("newServerError", nextProps.serverErrorMessage);
		}
		return false;
	},

	componentWillMount: function() {
		this.renderedChildren = this.props.children({ 
			TextInput: TextInput( this.formValues, this.emitter), 
			ErrorMessage: ErrorMessage(this.formValues, this.emitter),
			ServerErrorMessage: ServerErrorMessage(this.formValues, this.emitter)
		});
	},

	render: function() {
		return (
			<form onSubmit={this.onSubmit}>
				{this.renderedChildren}
				<button type="submit">submit</button>
			</form>
		);
	},

	onSubmit: function(e) {
		this.emitter.emit("error");
		e.preventDefault();
		console.log(this.formValues);
	}
});

module.exports = Reform;