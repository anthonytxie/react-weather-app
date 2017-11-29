const React = require("react");

const WeatherMessage = ({temperature, city}) => {
	return (
		<div>
			<h2> {`It is ${temperature} degrees in ${city}`}</h2>
		</div>
	);
}




module.exports = WeatherMessage;
