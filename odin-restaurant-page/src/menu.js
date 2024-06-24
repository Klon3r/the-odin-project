import stardardBeefImage from './img/standard.webp';
import doubleBeefImage from './img/double-beef.webp';
import baconBeefImage from './img/bacon.webp';
import veggieBurgerImage from './img/veggie.webp';
import chickenBurgerImage from './img/chicken.webp';
import chickenBaconBurgerImage from './img/chicken-bacon.webp';

import { removeContent } from './index.js';


export function handleMenuClick() {
    removeContent();
    const menuItemArray = [];
    addMenuItems(menuItemArray);

    const content = document.getElementById('content');
    const grid = document.createElement('div');

    grid.id = "menu-grid";
    // loop through each item in the menu item class
    for (const burger in menuItemArray) {
        const burgerCard = document.createElement('div');
        const burgerImg = document.createElement('img');
        const burgerName = document.createElement('h2');
        const burgerPrice = document.createElement('h4');
        const burgerIngredients = document.createElement('p');

        burgerImg.src = burgerImageGetter(menuItemArray[burger].name);
        burgerName.innerText = menuItemArray[burger].name;
        burgerPrice.innerText = "$" + menuItemArray[burger].price;
        burgerIngredients.innerText = menuItemArray[burger].ingredients;

        burgerImg.id = "burger-image";
        burgerCard.id = "burger-card";
        burgerIngredients.id = "burger-text";

        burgerCard.appendChild(burgerImg);
        burgerCard.appendChild(burgerName);
        burgerCard.appendChild(burgerPrice);
        burgerCard.appendChild(burgerIngredients);
        grid.appendChild(burgerCard);
        content.appendChild(grid);
    }
}

class item {
    constructor(name, price, ingredients) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }
}

function addMenuItems(array) {
    const menuItem1 = new item("Standard Burger", 15.99, "Beef Patty, Cheese, Burger sauce, Pickles, Lettuce, Tomato")
    const menuItem2 = new item("Double Beef Double Cheese", 19.99, "2 x Beef Patty, 2 x Cheese, Burger Sauce, Pickles, Onion, Tomato");
    const menuItem3 = new item("Bacon Burger", 18.99, "Beef Patty, Cheese, Bacon, Burger Sauce, Lettuce, Tomato, Onion");
    const menuItem4 = new item("Veggie Burger", 14.99, "Veggie Patty, Cheese, Burger Sauce, Pickles, Lettuce, Tomato, Onion");
    const menuItem5 = new item("Chicken Burger", 16.99, "Southern Fried Chicken, Cheese, Spicy Mayo, Pickles, Lettuce, Tomato, Onion");
    const menuItem6 = new item("Chicken Bacon Burger", 19.99, "Southern Fried Chicken, Bacon, Cheese, Spicy Mayo, Pickles, Lettuce, Taomato, Onion");
    
    array.push(menuItem1);
    array.push(menuItem2);
    array.push(menuItem3);
    array.push(menuItem4);
    array.push(menuItem5);
    array.push(menuItem6);    
}

function burgerImageGetter(name) {
    switch (name) {
        case 'Standard Burger': return stardardBeefImage;
        case 'Double Beef Double Cheese': return doubleBeefImage;
        case 'Bacon Burger': return baconBeefImage;
        case 'Veggie Burger': return veggieBurgerImage;
        case 'Chicken Burger': return chickenBurgerImage;
        case 'Chicken Bacon Burger': return chickenBaconBurgerImage;
    }
}

