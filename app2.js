/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const item = document.getElementById("item");

let itemCard = document.createElement("article");
itemCard.className = "item__card";
item.append(itemCard);

let itemImage = document.createElement("img");
itemImage.className = "item__card__image";
itemCard.append(itemImage);

let itemText = document.createElement("div");
itemText.className = "item__card__text";
itemCard.append(itemText);

let itemTitle = document.createElement("h5");
itemTitle.className = "item__card__title";
itemText.append(itemTitle);

let itemDescription = document.createElement("p");
itemDescription.className = "item__card__description";
itemText.append(itemDescription);

let itemPrice = document.createElement("p");
itemPrice.className = "item_card__price";
itemText.append(itemPrice);
