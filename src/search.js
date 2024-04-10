const key = "c610c25042474efb93d150114241502";

/**
 * Fetches autocomplete results from the WeatherAPI based on the given query.
 * @param {string} query The query string for autocomplete.
 * @returns {Promise<object>} A promise that resolves to the JSON response containing autocomplete results.
 */
export async function FetchAutoCompleteResults(query) {
  // Grab information from API based on query
  const response = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=${key}&q=${query}`
  );
  const data = await response.json();
  return data;
}

/**
 * Displays the autocompleted results from the WeatherAPI
 */
export function DisplayAutocompleteResults(results) {
  const searchInput = document.getElementById("search-input");
  const autocompleteResults = document.getElementById("autocomplete-div");
  autocompleteResults.innerHTML = "";
  // Display each result & place eventListener onto it
  results.forEach((result) => {
    const option = document.createElement("div");
    option.textContent = `${result.name}, ${result.region}`;
    option.classList.add("autocomplete-option");
    option.addEventListener("click", () => {
      searchInput.value = `${result.name} ${result.region}`;
      removeAutoCompleteResults();
      autocompleteResults.style.display = "none";
    });
    autocompleteResults.append(option);
  });
}

/**
 * Removes the  autocompleted search results
 */
function removeAutoCompleteResults() {
  const autocompleteResults = document.getElementById("autocomplete-div");
  autocompleteResults.innerHTML = "";
}
