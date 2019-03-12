//FIRST TASK
let filterArraySort = [{type:"Sexy", count:"34"}, 
                       {type:"Ugly", count:"1005350"}, 
                       {type:"Hot", count:"425"}]

let filterArrayProductType = [  {type:"Black", count:"574"},
                                {type:"White", count:"13"},
                                {type:"Red", count:"432"}]

let filterArraySleeveLength = [{type:"Short", count:"7667"}, 
                               {type:"Long", count:"443"}, 
                               {type:"Medium", count:"65"}]


let allDropdownLists = document.querySelectorAll(".dropdown__list");
console.log(allDropdownLists);
let elementToAdd = "";
for(let i = 0; i < allDropdownLists.length; i++){
    for(let j = 0; j < 3; j++){
        if(i === 0){
            elementToAdd = document.createElement("li"); 
            elementToAdd.innerHTML = filterArraySort[j].type + " - " + filterArraySort[j].count;
            elementToAdd.classList.add("dropdown__list__item");
            allDropdownLists[i].appendChild(elementToAdd);
        }
        else if(i === 1){
            elementToAdd = document.createElement("li"); 
            elementToAdd.innerHTML = filterArrayProductType[j].type + " - " + filterArrayProductType[j].count;
            elementToAdd.classList.add("dropdown__list__item");
            allDropdownLists[i].appendChild(elementToAdd);
        }
        else{
            elementToAdd = document.createElement("li"); 
            elementToAdd.innerHTML = filterArraySleeveLength[j].type + " - " + filterArraySleeveLength[j].count;
            elementToAdd.classList.add("dropdown__list__item");
            allDropdownLists[i].appendChild(elementToAdd);
        }
    }
}

//SECOND TASK
let imageMan = "assets/images/offer.jpg";
let imageHeartEmpty = "./assets/images/heart-shape.png";
let imageHeartFull = "./assets/images/heart-full.png";
let arrayItemDescriptions = ["Long", "Short","Black","Small","WTF","Red","Blue","Green"];
let arrayItemParagraphs = [ "A very long shirt", "A very short shirt", "A very black shirt",
                            "A very small shirt", "A very WTF shirt", "A very red shirt",
                            "A very blue shirt", "A very green shirt"];
let arrayPrices = ["12.3£", "19£", "5.2£", "42.1£", "32.5£", "333£", "45.2£", "FREE"];
let whereToAddElements = document.querySelectorAll(".main__offers");
let divToAdd = "";

for(let i = 0; i < arrayItemDescriptions.length; i++){
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


