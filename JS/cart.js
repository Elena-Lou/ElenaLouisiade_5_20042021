/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const products = document.getElementById("products");

const storage = JSON.parse(localStorage.getItem("cart"));
storage.forEach((data) => {
  let productContainer = document.createElement("div");
  productContainer.className = "product__container";
  products.append(productContainer)

  let product = document.createElement("p");
  product.innerHTML = data.name;
  product.className = "product__name"
  productContainer.append(product);
  console.log(data.name);

  let productPrice = document.createElement("p");
  productPrice.innerHTML = (data.price/100) + ".00€";
  productPrice.className = "product__price"
  productContainer.append(productPrice);
});
