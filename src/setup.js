import searchIcon from './img/search.png';

// setup
export function SetupPage() {
  const mainDiv = document.createElement("div");
  const headerDiv = document.createElement("div");

  headerDiv.id = "header";

  document.body.appendChild(mainDiv);
  mainDiv.appendChild(headerDiv);
}

export function SetupHeader() {
  const headerDiv = document.getElementById("header");
  const leftDiv = document.createElement("div");
  const centerDiv = document.createElement("div");
  const rightDiv = document.createElement("div");
  const title = document.createElement("h3");
  const search = document.createElement("input");
  const searchButton = document.createElement('img');

  title.innerText = "Weather";
  headerDiv.className = 'header-div';
  centerDiv.className = 'header-center-div';
  leftDiv.className = 'header-left-div';
  rightDiv.className = 'header-right-div';

  searchButton.className = 'search-button';
  searchButton.src = searchIcon

  search.placeholder = 'Enter a city..'

  headerDiv.appendChild(leftDiv);
  leftDiv.appendChild(title);
  headerDiv.appendChild(centerDiv);
  centerDiv.appendChild(search);
  centerDiv.appendChild(searchButton);
  headerDiv.appendChild(rightDiv);
}