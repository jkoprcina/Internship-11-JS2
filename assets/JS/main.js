//FIRST TASK
let filterArraySort = [
  { type: "Sexy", count: "34" },
  { type: "Ugly", count: "1005350" },
  { type: "Hot", count: "425" }
];

let filterArrayProductType = [
  { type: "Black", count: "574" },
  { type: "White", count: "13" },
  { type: "Red", count: "432" }
];

let filterArraySleeveLength = [
  { type: "Short", count: "7667" },
  { type: "Long", count: "443" },
  { type: "Medium", count: "65" }
];

let arrays = [ filterArraySort, filterArrayProductType, filterArraySleeveLength ]
//Koristim niz u nizu umisto objecta zbog lakse iteracije kroz njega 

let allDropdownLists = document.querySelectorAll(".dropdown__list");
let elementToAdd = "";
arrays.forEach(function(array, index) {
  array.forEach(function(item) {
      elementToAdd = document.createElement("li");
      elementToAdd.innerHTML =item.type + " - " + item.count;
      elementToAdd.classList.add("dropdown__list__item");
      allDropdownLists[index].appendChild(elementToAdd);
  });
});

//SECOND TASK
let arrayInfo = [
  {description: "Long", paragraph: "A very long shirt", price: "12.3£"},
  {description: "Short", paragraph: "A very short shirt", price: "19£"},
  {description: "Black", paragraph: "A very black shirt", price: "5.2£"},
  {description: "Small", paragraph: "A very small shirt", price: "42.1£"},
  {description: "WTF", paragraph: "A very WTF shirt", price: "32.5£"},
  {description: "Red", paragraph: "A very red shirt", price: "333£"},
  {description: "Blue", paragraph: "A very blue shirt", price: "45.2£"},
  {description: "Green", paragraph: "A very green shirt", price: "FREE"}
];
let whereToAddElements = document.querySelector(".main__offers");

arrayInfo.forEach(function(item) {
  whereToAddElements.innerHTML += `<div class ="offers__item">
    <img class="item__img" src="./assets/images/offer.jpg"/>
    <img class="item__heart-shape" src="./assets/images/heart-shape.png" />
    <img class="item__heart-full" src="./assets/images/heart-full.png" />
    <p class="item__img-description">${item.description}</p>
    <p class="item__paragraph">${item.paragraph}</p>
    <span class="item__price">${item.price}</span>
  </div>`
});

//THIRD, FOURTH && FIFTH TASK
let arrayOfItems = document.querySelectorAll(".offers__item");
let arrayOfDescriptions = document.querySelectorAll(".item__img-description");
let arrayOfHearts = document.querySelectorAll(".item__heart-full");
let arrayOfImg = document.querySelectorAll(".item__img");
let main = document.querySelector("main");
let mainDiv = document.querySelector(".main__offers");
let favouritesCounterSpan = document.createElement("span");
let numberOfFavourites = 0;

arrayOfHearts.forEach(function(item) {
  item.clicked = false;
});

for (let i = 0; i < arrayOfItems.length; i++) {
  //THIRD TASK
  arrayOfItems[i].addEventListener("mouseover", function() {
    arrayOfDescriptions[i].style.opacity = 1;
    arrayOfDescriptions[i].style.top = "297px";
    arrayOfHearts[i].style.opacity = 1;
  });

  arrayOfItems[i].addEventListener("mouseleave", function() {
    arrayOfDescriptions[i].style.opacity = 0;
    if (!arrayOfHearts[i].clicked) {
      arrayOfHearts[i].style.opacity = 0;
    }
  });

  //FOURTH TASK
  arrayOfHearts[i].addEventListener("click", function(event) {
    if (arrayOfHearts[i].clicked) {
      arrayOfHearts[i].style.opacity = 0;
      arrayOfHearts[i].clicked = false;
      numberOfFavourites--;
    } else {
      arrayOfHearts[i].style.opacity = 1;
      arrayOfHearts[i].clicked = true;
      numberOfFavourites++;
    }
    //method manipulateSpan is at the bottom 
    manipulateSpan();
    event.stopPropagation();
  });

  //FIFTH TASK
  arrayOfItems[i].addEventListener("click", function() {
    let newDetailsPage = window.open();
    newDetailsPage
      .document.write(`<link rel="stylesheet" href="./assets/styles/main.css"/>
                <body><main><div class="main__offers"> ${
                  arrayOfItems[i].outerHTML
                } </div></main></body>`);
    newDetailsPage.document.close();
  });
}

//adds/removes span or changes it's context, whichever is needed
function manipulateSpan() {
  if (numberOfFavourites > 0) {
    favouritesCounterSpan.innerHTML = "Favourites: " + numberOfFavourites;
    favouritesCounterSpan.style.margin = "45%";
    favouritesCounterSpan.style.fontWeight = "bold";
    favouritesCounterSpan.style.color = "gray";
    main.insertBefore(favouritesCounterSpan, mainDiv);
  } else {
    main.removeChild(favouritesCounterSpan);
  }
}
