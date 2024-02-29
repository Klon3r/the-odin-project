import css from "./style.css"

// setup
function SetupPage() {
    const mainDiv = document.createElement('div');
    const headerDiv = document.createElement('div');

    headerDiv.id = 'header';

    document.body.appendChild(mainDiv);
    mainDiv.appendChild(headerDiv);
}

function SetupHeader() {
    const headerDiv = document.getElementById('header');
    headerDiv.innerText = "test"
}

SetupPage();
SetupHeader();