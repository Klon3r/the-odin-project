const key = "c610c25042474efb93d150114241502";

/**
 * Fetches current weather information for a specific location from the WeatherAPI.
 * @param {string} location The location for which to fetch the weather information.
 * @returns {Promise<void>} A promise that resolves once the weather information is fetched and processed.
 */
export async function GetWeatherCurrent(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`,
    { mode: "cors" }
  );
  const data = await response.json();
  GetWeatherCurrentInfo(data);
}

/**
 * Processes the current weather information and prepares it for display.
 * @param {object} weather The weather data object containing current weather information.
 */
function GetWeatherCurrentInfo(weather) {
  // current weather info
  const weather_temp_c = weather.current.temp_c;
  const weather_temp_f = weather.current.temp_f;
  const weather_feelslike_c = weather.current.feelslike_c;
  const weather_feelslike_f = weather.current.feelslike_f;
  const weather_humidity = weather.current.humidity;
  const weather_last_updated = weather.current.last_updated;
  const weather_img = weather.current.condition.icon;
  const weather_description = weather.current.condition.text;
  const weather_celcius = "°C";
  const weather_fahrenheit = "°F";

  // location info
  const location_name = weather.location.name;
  const location_region = weather.location.region;
  const location_country = weather.location.country;

  const weather_last_updated_split = weather_last_updated.split(" ");

  // weather hashmap
  const weatherInfo = {
    temp_c: weather_temp_c,
    temp_f: weather_temp_f,
    feelslike_c: weather_feelslike_c,
    feelslike_f: weather_feelslike_f,
    humidity: weather_humidity,
    last_updated: weather_last_updated_split[1],
    description: weather_description,
    image: weather_img,
    name: location_name,
    region: location_region,
    country: location_country,
    celcius: weather_celcius,
    fahrenheit: weather_fahrenheit,
  };
  displayWeatherInfo(weatherInfo);
}

/**
 * Using the weather information display it on the page
 * @param {hashmap} weather Hashmap of weather information
 */
function displayWeatherInfo(weather) {
  const weatherCard = document.getElementById("weather-card");
  const weatherDiv = document.createElement("div");

  // last updated
  const lastUpdateDiv = document.createElement("div");
  const lastUpdate = document.createElement("p");

  lastUpdate.innerText = "LAST UPDATED " + weather.last_updated;
  lastUpdate.className = "last-update";
  lastUpdateDiv.id = "last-update-div";

  lastUpdateDiv.appendChild(lastUpdate);
  weatherCard.appendChild(lastUpdateDiv);

  // location info
  const locationDiv = document.createElement("div");
  const locationName = document.createElement("h5");

  locationName.innerText = `${weather.name}, ${weather.region}, ${weather.country}`;
  locationName.className = "location-text";

  locationDiv.appendChild(locationName);
  weatherDiv.appendChild(locationDiv);

  // temp info
  const tempText = document.createElement("h1");
  tempText.id = "temp-text";
  const feelsLikeText = document.createElement("p");
  feelsLikeText.id = "feels-like";
  const tempTextDiv = document.createElement("div");

  const tempTextC = weather.temp_c + weather.celcius;
  const tempTextF = weather.temp_f + weather.fahrenheit;
  const feelsLikeF = "FEELS LIKE " + weather.feelslike_f + weather.fahrenheit;
  const feelsLikeC = "FEELS LIKE " + weather.feelslike_c + weather.celcius;

  tempText.innerText = tempTextC;
  feelsLikeText.innerText = feelsLikeC;
  feelsLikeText.className = "feels-like-text";
  tempText.className = "temp-text";
  tempTextDiv.className = "temp-text-div";

  tempTextDiv.appendChild(tempText);
  tempTextDiv.appendChild(feelsLikeText);
  weatherDiv.appendChild(tempTextDiv);

  // weather img & description
  const imageTextDiv = document.createElement("div");

  const weatherImg = document.createElement("img");
  const weatherText = document.createElement("p");

  imageTextDiv.className = "weather-image-text-div";
  weatherDiv.className = "weather-div";
  weatherDiv.id = "weather-div";
  weatherImg.src = weather.image;
  weatherText.innerText = weather.description.toUpperCase();

  imageTextDiv.appendChild(weatherImg);
  imageTextDiv.appendChild(weatherText);
  weatherDiv.appendChild(imageTextDiv);

  // Change Temp
  const changeTempDiv = document.createElement("div");
  const changeTempButton = document.createElement("button");

  changeTempButton.textContent = "⚙️ Change Unit";
  changeTempDiv.className = "change-temp-div";
  changeTempButton.className = "change-temp-button";

  changeTempButton.addEventListener("click", () => {
    changeTempUnit(tempTextC, tempTextF, feelsLikeC, feelsLikeF);
  });

  changeTempDiv.appendChild(changeTempButton);

  const headerRight = document.getElementById("header-right-div");
  headerRight.appendChild(changeTempDiv);

  weatherCard.appendChild(weatherDiv);
}

/**
 * Change the unit of measurement for the temperature
 * @param {int} tempC What the temperature is in Celcius
 * @param {int} tempF What the temperature is in Fahrenheit
 * @param {int} feelsC What the weather feels like in Celcius
 * @param {int} feelsF What the weather feels like in Fahrenheit
 */
function changeTempUnit(tempC, tempF, feelsC, feelsF) {
  const tempText = document.getElementById("temp-text");
  const feelsLikeText = document.getElementById("feels-like");

  if (tempText.innerText.includes("C")) {
    // convert to farenheit
    feelsLikeText.innerText = feelsF;
    tempText.innerText = tempF;
  } else {
    // convert to celcius
    tempText.innerText = tempC;
    feelsLikeText.innerText = feelsC;
  }
}