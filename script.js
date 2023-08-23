const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '687d5b6a48msh965c8f159a6a90ap161f82jsn7b48a9ca1b43',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function FetchingApi(){
try {
    // cityName.innerHTML=city
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
    cloud_pct.innerHTML = data.cloud_pct;
    temp.innerHTML = data.temp;
    feels_like.innerHTML = data.feels_like;
    humidity.innerHTML = data.humidity;
    min_temp.innerHTML = data.min_temp;
    max_temp.innerHTML = data.max_temp;
    wind_speed.innerHTML = data.wind_speed;
    wind_degree.innerHTML = data.wind_degree;
    sunrise.innerHTML = data.sunrise;
    sunset.innerHTML = data.sunset;
} catch (error) {
	console.error(error);
}
}
FetchingApi();
