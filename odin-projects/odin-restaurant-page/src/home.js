import cowImage from './img/cow.png';
import chickenImage from './img/chicken.png';
import appleImage from './img/apple.png';
import { removeContent } from './index.js';


export function handleHomeClick() {
    removeContent();
    const content = document.getElementById('content');
    const grid = document.createElement('div');
    const beef = document.createElement('div');
    const chicken = document.createElement('div');
    const produce = document.createElement('div');

    const beefText = document.createElement('h4');
    const chickenText = document.createElement('h4');
    const produceText = document.createElement('h4');

    const beefImg = document.createElement('img');
    const chickenImg = document.createElement('img');
    const produceImg = document.createElement('img');

    beefImg.id = "cowImage";
    chickenImg.id = "chickenImage";
    produceImg.id = "appleImage";

    beefImg.src = cowImage;
    chickenImg.src = chickenImage
    produceImg.src = appleImage

    beefText.innerText = "100% Australian Beef\nPure premium ground beef, pressed and seasoned on the grill";
    chickenText.innerText = "Free Range Chicken\nAll our chicken is free range and RSPCA approved";
    produceText.innerText = "Locally grown produce\nAll our fresh produce is grown locally right here in Australia";

    beef.appendChild(beefImg);
    beef.appendChild(beefText);
    chicken.appendChild(chickenImg);
    chicken.appendChild(chickenText);
    produce.appendChild(produceImg);
    produce.appendChild(produceText);

    grid.id = "grid";
    beef.id = "card";
    chicken.id = "card";
    produce.id = "card";

    content.appendChild(grid);
    grid.appendChild(beef);
    grid.appendChild(chicken);
    grid.appendChild(produce);
}
