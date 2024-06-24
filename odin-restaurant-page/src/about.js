import { removeContent } from "./index";

export function handleAboutClick() {
    removeContent();
    
    const content = document.getElementById('content');
    const aboutDiv = document.createElement('div');
    const title = document.createElement('h2');
    const info = document.createElement('p');

    aboutDiv.id = "about-div";
    info.id = "about-info";

    title.innerText = "Just good people! Making good burgers!"
    info.innerText = "Welcome to Big Daddy Burgers, where size meets flavor in every bite! At Big Daddy Burgers, we believe that bigger is always better when it comes to crafting the perfect burger experience. Prepare to embark on a culinary adventure that takes your taste buds to new heights of satisfaction.";

    aboutDiv.appendChild(title);
    aboutDiv.appendChild(info);
    content.appendChild(aboutDiv);
}