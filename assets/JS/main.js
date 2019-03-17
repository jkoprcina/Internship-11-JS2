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

let allDropdownLists = document.querySelectorAll(".dropdown__list");
let elementToAdd = "";
for (let i = 0; i < allDropdownLists.length; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 0) {
      elementToAdd = document.createElement("li");
      elementToAdd.innerHTML =
        filterArraySort[j].type + " - " + filterArraySort[j].count;
      elementToAdd.classList.add("dropdown__list__item");
      allDropdownLists[i].appendChild(elementToAdd);
    } else if (i === 1) {
      elementToAdd = document.createElement("li");
      elementToAdd.innerHTML =
        filterArrayProductType[j].type +
        " - " +
        filterArrayProductType[j].count;
      elementToAdd.classList.add("dropdown__list__item");
      allDropdownLists[i].appendChild(elementToAdd);
    } else {
      elementToAdd = document.createElement("li");
      elementToAdd.innerHTML =
        filterArraySleeveLength[j].type +
        " - " +
        filterArraySleeveLength[j].count;
      elementToAdd.classList.add("dropdown__list__item");
      allDropdownLists[i].appendChild(elementToAdd);
    }
  }
}

//SECOND TASK
let imageMan = "assets/images/offer.jpg";
let imageHeartEmpty = "./assets/images/heart-shape.png";
let imageHeartFull = "./assets/images/heart-full.png";
let arrayItemDescriptions = [
  "Long",
  "Short",
  "Black",
  "Small",
  "WTF",
  "Red",
  "Blue",
  "Green"
];
let arrayItemParagraphs = [
  "A very long shirt",
  "A very short shirt",
  "A very black shirt",
  "A very small shirt",
  "A very WTF shirt",
  "A very red shirt",
  "A very blue shirt",
  "A very green shirt"
];
let arrayPrices = [
  "12.3£",
  "19£",
  "5.2£",
  "42.1£",
  "32.5£",
  "333£",
  "45.2£",
  "FREE"
];
let whereToAddElements = document.querySelectorAll(".main__offers");
let divToAdd = "";

for (let i = 0; i < arrayItemDescriptions.length; i++) {
  divToAdd = document.createElement("div");
  divToAdd.classList.add("offers__item");
  whereToAddElements[0].appendChild(divToAdd);
  elementToAdd = document.createElement("img");
  elementToAdd.src = imageMan;
  elementToAdd.classList.add("item__img");
  divToAdd.appendChild(elementToAdd);
  elementToAdd = document.createElement("img");
  elementToAdd.src = imageHeartEmpty;
  elementToAdd.classList.add("item__heart-shape");
  divToAdd.appendChild(elementToAdd);
  elementToAdd = document.createElement("img");
  elementToAdd.src = imageHeartFull;
  elementToAdd.classList.add("item__heart-full");
  divToAdd.appendChild(elementToAdd);
  elementToAdd = document.createElement("p");
  elementToAdd.innerHTML = arrayItemDescriptions[i];
  elementToAdd.classList.add("item__img-description");
  divToAdd.appendChild(elementToAdd);
  elementToAdd = document.createElement("p");
  elementToAdd.innerHTML = arrayItemParagraphs[i];
  elementToAdd.classList.add("item__paragraph");
  divToAdd.appendChild(elementToAdd);
  elementToAdd = document.createElement("span");
  elementToAdd.innerHTML = arrayPrices[i];
  elementToAdd.classList.add("item__price");
  divToAdd.appendChild(elementToAdd);
}

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
