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
  const weather_last_updated = weather.current.last_updated;
  const weather_img = weather.current.condition.icon;
  const weather_description = weather.current.condition.text;

  // location info
  const location_name = weather.location.name;
  const location_region = weather.location.region;
  const location_country = weather.location.country;

  const weather_last_updated_split = weather_last_updated.split(" ");

  // weather hashmap
  const weatherInfo = {
    temp_c: weather_temp_c,
    feelslike_c: weather_feelslike_c,
    humidity: weather_humidity,
    last_updated: weather_last_updated_split[1],
    description: weather_description,
    image: weather_img,
    name: location_name,
    region: location_region,
    country: location_country,
  };

  displayWeatherInfo(weatherInfo);
}

function displayWeatherInfo(weather) {
  const weatherCard = document.getElementById("weather-card");
  // last updated
  const lastUpdateDiv = document.createElement("div");
  const lastUpdate = document.createElement("p");

  lastUpdate.innerText = "LAST UPDATED " + weather.last_updated;
  lastUpdate.className = "last-update";

  lastUpdateDiv.appendChild(lastUpdate);
  weatherCard.appendChild(lastUpdateDiv);

  // temp
  const tempDiv = document.createElement('div');
  const imageTextDiv = document.createElement('div');
  const tempTextDiv = document.createElement('div');
  const weatherImg = document.createElement('img');
  const weatherText = document.createElement('p');
  const tempText = document.createElement('h4');
  const feelsLikeText = document.createElement('p');

  imageTextDiv.className = 'weather-image-text-div';
  weatherImg.src = weather.image;
  weatherText.innerText = weather.description;


  imageTextDiv.appendChild(weatherImg);
  imageTextDiv.appendChild(weatherText);
  tempDiv.appendChild(imageTextDiv);
  tempDiv.appendChild(tempTextDiv);
  weatherCard.appendChild(tempDiv);

}
