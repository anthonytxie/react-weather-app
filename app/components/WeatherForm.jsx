const React = require("react");

const WeatherForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();
		if (this.refs.city.value.length > 0) {
			let updates = {};
			let city = this.refs.city.value;
			this.refs.city.value = "";
			updates.city = city;
			this.props.onSearch(updates);
		}
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div>
						<input type="text" ref="city">
							Weather Form{" "}
						</input>
					</div>
					<div>
						<button> Submit </button>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;
