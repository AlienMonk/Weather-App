
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '687d5b6a48msh965c8f159a6a90ap161f82jsn7b48a9ca1b43',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeatherAPi = async (city) => {
    try {
      cityName.innerHTML = city;
      const response = await fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
      );
      const data = await response.json();
      // cloud_pct.innerHTML = data.cloud_pct;
      temp.innerHTML = data.temp;
      temp2.innerHTML = data.temp;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      humidity2.innerHTML = data.humidity;
      min_temp.innerHTML = data.min_temp;
      max_temp.innerHTML = data.max_temp;
      wind_speed.innerHTML = data.wind_speed;
      wind_speed2.innerHTML = data.wind_speed;
      wind_degrees.innerHTML = data.wind_degrees;
      sunrise.innerHTML = new Date(data.sunrise).toLocaleTimeString('en-US', { hourCycle: 'h12' });
      sunset.innerHTML = new Date(data.sunset).toLocaleTimeString('en-US', { hourCycle: 'h12' });
  
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeatherAPi(city.value);
  });
  const dropdownItems=document.querySelectorAll(".dropdown-item")
  dropdownItems.forEach(item=>{
    item.addEventListener('click',()=>{
        const city = item.innerHTML
        getWeatherAPi(city)
    })})

  getWeatherAPi("Delhi")

  const shanghaiWeatherAPi = async (city) => {
    try {
      
      const response = await fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai",
        options
      );
      const data = await response.json();
      Shanghai_cloud_pct.innerHTML = data.cloud_pct;
      Shanghai_temp.innerHTML = data.temp;
      Shanghai_feels_like.innerHTML = data.feels_like;
      Shanghai_humidity.innerHTML = data.humidity;
      Shanghai_min_temp.innerHTML = data.min_temp;
      Shanghai_max_temp.innerHTML = data.max_temp;
      Shanghai_wind_speed.innerHTML = data.wind_speed;
      Shanghai_wind_degrees.innerHTML = data.wind_degrees;
      Shanghai_sunrise.innerHTML = new Date(data.sunrise).toLocaleTimeString('en-US', { hourCycle: 'h12' });
      Shanghai_sunset.innerHTML = new Date(data.sunset).toLocaleTimeString('en-US', { hourCycle: 'h12' });
  
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  shanghaiWeatherAPi();

  const bostonWeatherAPi = async (city) => {
    try {
      
      const response = await fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
        options
      );
      const data = await response.json();
      Boston_cloud_pct.innerHTML = data.cloud_pct;
      Boston_temp.innerHTML = data.temp;
      Boston_feels_like.innerHTML = data.feels_like;
      Boston_humidity.innerHTML = data.humidity;
      Boston_min_temp.innerHTML = data.min_temp;
      Boston_max_temp.innerHTML = data.max_temp;
      Boston_wind_speed.innerHTML = data.wind_speed;
      Boston_wind_degrees.innerHTML = data.wind_degrees;
      Boston_sunrise.innerHTML = new Date(data.sunrise).toLocaleTimeString('en-US', { hourCycle: 'h12' });
      Boston_sunset.innerHTML = new Date(data.sunset).toLocaleTimeString('en-US', { hourCycle: 'h12' });
  
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  bostonWeatherAPi();

  const mumbaiWeatherAPi = async (city) => {
    try {
      
      const response = await fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
        options
      );
      const data = await response.json();
      Mumbai_cloud_pct.innerHTML = data.cloud_pct;
      Mumbai_temp.innerHTML = data.temp;
      Mumbai_feels_like.innerHTML = data.feels_like;
      Mumbai_humidity.innerHTML = data.humidity;
      Mumbai_min_temp.innerHTML = data.min_temp;
      Mumbai_max_temp.innerHTML = data.max_temp;
      Mumbai_wind_speed.innerHTML = data.wind_speed;
      Mumbai_wind_degrees.innerHTML = data.wind_degrees;
      Mumbai_sunrise.innerHTML = new Date(data.sunrise).toLocaleTimeString('en-US', { hourCycle: 'h12' });
      Mumbai_sunset.innerHTML = new Date(data.sunset).toLocaleTimeString('en-US', { hourCycle: 'h12' });
  
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  mumbaiWeatherAPi();

  const kolkataWeatherAPi = async (city) => {
    try {
      
      const response = await fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
        options
      );
      const data = await response.json();
      Kolkata_cloud_pct.innerHTML = data.cloud_pct;
      Kolkata_temp.innerHTML = dataKolkata
      Kolkata_feels_like.innerHTML = data.feels_like;
      Kolkata_humidity.innerHTML = data.humidity;
      Kolkata_min_temp.innerHTML = data.min_temp;
      Kolkata_max_temp.innerHTML = data.max_temp;
      Kolkata_wind_speed.innerHTML = data.wind_speed;
      Kolkata_wind_degrees.innerHTML = data.wind_degrees;
      Kolkata_sunrise.innerHTML = new Date(data.sunrise).toLocaleTimeString('en-US', { hourCycle: 'h12' });
      Kolkata_sunset.innerHTML = new Date(data.sunset).toLocaleTimeString('en-US', { hourCycle: 'h12' });
  
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  kolkataWeatherAPi();

  const newyorkWeatherAPi = async (city) => {
    try {
      
      const response = await fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York",
        options
      );
      const data = await response.json();
      Newyork_cloud_pct.innerHTML = data.cloud_pct;
      Newyork_temp.innerHTML = data.temp;
      Newyork_feels_like.innerHTML = data.feels_like;
      Newyork_humidity.innerHTML = data.humidity;
      Newyork_min_temp.innerHTML = data.min_temp;
      Newyork_max_temp.innerHTML = data.max_temp;
      Newyork_wind_speed.innerHTML = data.wind_speed;
      Newyork_wind_degrees.innerHTML = data.wind_degrees;
      Newyork_sunrise.innerHTML = new Date(data.sunrise).toLocaleTimeString('en-US', { hourCycle: 'h12' });
      Newyork_sunset.innerHTML = new Date(data.sunset).toLocaleTimeString('en-US', { hourCycle: 'h12' });
  
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  newyorkWeatherAPi();