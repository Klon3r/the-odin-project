import searchIcon from "./img/search.png";
import { FetchAutoCompleteResults, DisplayAutocompleteResults } from "./search";
import { GetWeatherCurrent } from "./weather";

/**
 * Setup the page with header, main and content div
 */
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

/**
 * Setup the page header with title, search box & button
 */
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
  rightDiv.id = "header-right-div";

  // Search box
  searchButton.className = "search-button";
  searchButton.src = searchIcon;

  search.placeholder = "Enter a city..";
  search.id = "search-input";
  autocompleteDiv.id = "autocomplete-div";

  const noResultsText = "No results found";

  searchButton.addEventListener("click", () => {
    if (autocompleteDiv.innerText != noResultsText) {
      RemoveWeatherCardContent();
      GetWeatherCurrent(search.value);
      autocompleteDiv.style.display = "none";
    }
  });

  // Search results
  search.addEventListener("input", async () => {
    const query = search.value.trim();
    if (query.length > 0) {
      // If there is something to search
      const autoCompleteResultsData = await FetchAutoCompleteResults(query);
      if (autoCompleteResultsData.length > 0) {
        DisplayAutocompleteResults(autoCompleteResultsData);
        autocompleteDiv.style.display = "block";
      } else {
        // If no results are found
        autocompleteDiv.innerHTML = "";
        autocompleteDiv.style.display = "block";
        autocompleteDiv.innerText = noResultsText;
      }
    } else {
      autocompleteDiv.innerHTML = "";
      autocompleteDiv.style.display = "none";
    }
  });

  headerDiv.appendChild(leftDiv);
  leftDiv.appendChild(title);
  headerDiv.appendChild(centerDiv);
  searchDiv.appendChild(search);
  searchDiv.appendChild(searchButton);
  centerDiv.appendChild(searchDiv);
  centerDiv.appendChild(autocompleteDiv);
  headerDiv.appendChild(rightDiv);
}

/**
 * Setup content with content, weather-card divs
 */
export function SetupContent() {
  const contentDiv = document.getElementById("content-div");
  const weatherCard = document.createElement("div");

  contentDiv.className = "content-div";
  weatherCard.className = "weather-card";
  weatherCard.id = "weather-card";

  contentDiv.appendChild(weatherCard);
}

/**
 * Remove content from weather card
 */
function RemoveWeatherCardContent() {
  const weatherCard = document.getElementById("weather-card");
  const headerRightDiv = document.getElementById("header-right-div");

  weatherCard.innerHTML = "";
  headerRightDiv.innerHTML = "";
}