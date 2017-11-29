const axios = require("axios");

const apiKey = "bc00dae01764c931a973a3f20880c152";
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${apiKey}&units=metric`;

const getTemp = location => {
	let encodedLocation = encodeURIComponent(location);
	let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
	return axios
		.get(requestUrl)
		.then(response => {
			return response.data.list[0].main.temp
		})
		.catch(err => console.log(err));
};


module.exports = getTemp

