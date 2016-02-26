var React = require('react');

module.exports = function(formValues, emitter) {
	return React.createClass({
		
		getDefaultProps: function() {
			return {
				isRequired: false
			}
		},

		render: function() {
			return (
				<input type="text" onChange={this.onChange} {...this.props}/>
			)
		},

		componentWillMount: function() {
			formValues[this.props.name] = {
				value: "",
				valid: false,
				validators: this.props.rules
			}

			if (this.props.isRequired) {
				
			}

		},

		onChange: function(e) {
			
			formValues[this.props.name] = {
				value: e.currentTarget.value,
				valid: false
			}

			emitter.emit("error", this.props.name);
		}
	})
}
