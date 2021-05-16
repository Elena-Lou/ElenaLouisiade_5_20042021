/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get("id");
console.info(id);

const item = document.getElementById("item");

if(id == null || typeof id == 'undefined'){
  alert('Le produit demandé n\'existe pas')
} else {
fetch("http://localhost:3000/api/furniture/" + id)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data);

      let itemCard = document.createElement("article");
      itemCard.className = "item__card";
      item.append(itemCard);

      let itemImage = document.createElement("img");
      itemImage.className = "item__card__image";
      itemImage.src = data.imageUrl;
      itemCard.append(itemImage);

      let itemText = document.createElement("div");
      itemText.className = "item__card__text";
      itemCard.append(itemText);

      let itemTitle = document.createElement("h5");
      itemTitle.className = "item__card__title";
      itemTitle.innerHTML = data.name;
      itemText.append(itemTitle);

      let itemDescription = document.createElement("p");
      itemDescription.className = "item__card__description";
      itemDescription.innerHTML = data.description;
      itemText.append(itemDescription);

      let itemPrice = document.createElement("p");
      itemPrice.className = "item__card__price";
      itemPrice.innerHTML = data.price / 100 + "€";
      itemText.append(itemPrice);

      let cartConfirmation = document.createElement("div");
      cartConfirmation.className = "item__card__cart";
      itemText.append(cartConfirmation);

      let itemVarnish = document.createElement("select");
      itemVarnish.className = "item__card__varnish";
      cartConfirmation.append(itemVarnish);
      data.varnish.forEach(()=> {
        let itemVarnishOption = document.createElement("option");
        itemVarnishOption.innerHTML = data.varnish;
        itemVarnish.append(itemVarnishOption);
      })

      let addToCart = document.createElement("button");
      addToCart.className = "item__card__button";
      addToCart.innerHTML = "Ajouter au panier";
      addToCart.addEventListener("click", function (event) {
        console.log("panier")
        let storage = JSON.parse(localStorage.getItem("cart"));
        if (storage == null) {
          storage = [];
        }
        storage.push(data);
        localStorage.setItem("cart", JSON.stringify(storage));
      });
      cartConfirmation.append(addToCart);
    })};
 
