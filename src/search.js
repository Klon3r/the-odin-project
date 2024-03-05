
const key = "c610c25042474efb93d150114241502";

export async function FetchAutoCompleteResults(query) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=${key}&q=${query}`
  );
  const data = await response.json();
  return data;
}

export function DisplayAutocompleteResults(results) {
  const searchInput = document.getElementById("search-input");
  const autocompleteResults = document.getElementById("autocomplete-div");
  autocompleteResults.innerHTML = "";
  results.forEach((result) => {
    const option = document.createElement("div");
    option.textContent = `${result.name}, ${result.region}`;
    option.classList.add("autocomplete-option");
    option.addEventListener("click", () => {
      searchInput.value = `${result.name} ${result.region}`;
      removeAutoCompleteResults()
    });
    autocompleteResults.append(option);
  });
}

function removeAutoCompleteResults() {
  const autocompleteResults = document.getElementById("autocomplete-div");
  autocompleteResults.innerHTML = "";
}