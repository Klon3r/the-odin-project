import css from "./style.css"

import { handleHomeClick } from './home.js';
import { handleMenuClick } from "./menu.js";
import { handleAboutClick } from "./about.js";

function init() {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const content = document.createElement('div');

    container.id = "container"
    header.id = "header";
    content.id = "content";

    document.body.appendChild(container);
    container.appendChild(header);
    container.appendChild(content);
}

function header() {
    const header = document.getElementById('header');
    const title = document.createElement('h1');
    const nav = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const about = document.createElement('a');

    title.id = "title";
    
    title.innerText = "Big Daddy Burgers"
    home.innerText = "HOME";
    menu.innerText = "MENU";
    about.innerText = "ABOUT";
    
    home.addEventListener('click', () => { handleHomeClick() });
    menu.addEventListener('click', () => { handleMenuClick(); });
    about.addEventListener('click', () => { handleAboutClick(); });

    header.appendChild(title);
    header.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
}

export function removeContent() {
    const content = document.getElementById('content');
    
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

init();
header();
handleHomeClick();