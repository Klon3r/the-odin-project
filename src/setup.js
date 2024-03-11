import searchIcon from "./img/search.png";
import { FetchAutoCompleteResults, DisplayAutocompleteResults } from "./search";
import { GetWeatherCurrent } from "./weather";

// setup
export function SetupPage() {
  const mainDiv = document.createElement("div");
  const headerDiv = document.createElement("div");
  const contentDiv = document.createElement("div");

  headerDiv.id = "header";
  mainDiv.id = "main-div";
  contentDiv.id = "content-div";

  document.body.appendChild(mainDiv);
  mainDiv.appendChild(headerDiv);
  mainDiv.appendChild(contentDiv);

  SetupHeader();
  SetupContent();
}

export function SetupHeader() {
  const headerDiv = document.getElementById("header");
  const leftDiv = document.createElement("div");
  const centerDiv = document.createElement("div");
  const searchDiv = document.createElement("div");
  const rightDiv = document.createElement("div");
  const title = document.createElement("h3");
  const search = document.createElement("input");
  const searchButton = document.createElement("img");
  const autocompleteDiv = document.createElement("div");

  title.innerText = "Weather";
  headerDiv.className = "header-div";
  centerDiv.className = "header-center-div";
  searchDiv.className = "header-search-div";
  leftDiv.className = "header-left-div";
  rightDiv.className = "header-right-div";

  // Search box 
  searchButton.className = "search-button";
  searchButton.src = searchIcon;

  search.placeholder = "Enter a city..";
  search.id = "search-input"
  autocompleteDiv.id = "autocomplete-div";

  searchButton.addEventListener('click', () => {
    RemoveWeatherCardContent()
    GetWeatherCurrent(search.value);
    autocompleteDiv.style.display = 'none';
  })

  search.addEventListener('input', async () => {
    const query = search.value.trim();
    if (query.length > 0) {
      const autoCompleteResultsData = await FetchAutoCompleteResults(query);
      if(autoCompleteResultsData.length > 0) {
        console.log(autoCompleteResultsData)
        DisplayAutocompleteResults(autoCompleteResultsData);
        autocompleteDiv.style.display = 'block';
      } else {
        // If no results are found
        autocompleteDiv.innerHTML = "";
        autocompleteDiv.style.display = 'block';
        autocompleteDiv.innerText = "No Results Found"
        
      }
    } else {
      autocompleteDiv.innerHTML = "";
      autocompleteDiv.style.display = 'none';
    }
  })

  headerDiv.appendChild(leftDiv);
  leftDiv.appendChild(title);
  headerDiv.appendChild(centerDiv);
  searchDiv.appendChild(search);
  searchDiv.appendChild(searchButton)
  centerDiv.appendChild(searchDiv);
  centerDiv.appendChild(autocompleteDiv);
  headerDiv.appendChild(rightDiv);
}

export function SetupContent() {
  const contentDiv = document.getElementById("content-div");
  const weatherCard = document.createElement("div");

  contentDiv.className = "content-div";
  weatherCard.className = "weather-card";
  weatherCard.id = "weather-card";

  contentDiv.appendChild(weatherCard);
}

function RemoveWeatherCardContent() {
  const weatherCard = document.getElementById('weather-card');
  weatherCard.innerHTML = '';
}