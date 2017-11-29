const React = require("react");
const WeatherForm = require("WeatherForm");
const WeatherMessage = require("WeatherMessage");
const getTemp = require("getTemp");

const Weather = React.createClass({
	getDefaultProps: function() {
		return {
			message: "Get the Current Weather",
			city: "Miami",
			temperature: 88
		};
	},

	getInitialState: function() {
		return {
			isLoading: false,
			city: this.props.city,
			temperature: this.props.temperature
		};
	},

	handleSearch: function(update) {
		this.setState({ isLoading: true });
		getTemp(update.city).then(result => {
			this.setState({
				city: update.city,
				temperature: result,
				isLoading: false
			});
		});
	},

	render: function() {
		let { message, city, temperature, isLoading } = this.state;		
		function renderMessage() {

			if(isLoading) {
				return <h3>Result is loading....</h3>
			} 

			else if (temperature && city)  {
				return <WeatherMessage temperature={temperature} city={city}/>
			}
			else {
				return <h3>Invalid city</h3>
			}

		}


		return (
			<div>
				<div>
					<h3>Get Weather</h3>
				</div>
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;
