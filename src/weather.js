const key = "c610c25042474efb93d150114241502";

export async function GetWeatherCurrent(location) {
  fetch(
    "https://api.weatherapi.com/v1/current.json?key=" +
      key +
      "&q=" +
      location +
      "&aqi=no",
    { mode: "cors" }
  )
    .then(function (response) {
      // wait for response before returning
      return response.json();
    })
    .then(function (response) {
      GetWeatherCurrentInfo(response);
    });
}

function GetWeatherCurrentInfo(weather) {
  console.log(weather);

  // current weather info
  const weather_temp_c = weather.current.temp_c;
  const weather_feelslike_c = weather.current.feelslike_c;
  const weather_humidity = weather.current.humidity;

  // location info
  const location_name = weather.location.name;
  const location_region = weather.location.region;
  const location_country = weather.location.country;

  // weather hashmap
  const weatherInfo = {
    temp_c: weather_temp_c,
    feelslike_c: weather_feelslike_c,
    humidity: weather_humidity,
    name: location_name,
    region: location_region,
    country: location_country,
  };

  displayWeatherInfo(weatherInfo);
}

function displayWeatherInfo(weather) {
}