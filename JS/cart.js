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
let total = 0;
storage.forEach((data) => {
  let productContainer = document.createElement("div");
  productContainer.className = "product__container";
  products.append(productContainer);

  let product = document.createElement("p");
  product.innerHTML = data.name;
  product.className = "product__name";
  productContainer.append(product);
  console.log(data.name);

  let productPrice = document.createElement("p");
  productPrice.innerHTML = data.price / 100 + ".00€";
  total += data.price / 100;
  productPrice.className = "product__price";
  productContainer.append(productPrice);
});

let totalPrice = document.createElement("p");
totalPrice.setAttribute("id", "total__price");
totalPrice.innerHTML = "Prix total : " + total + ".00€";
localStorage.setItem("total", total);
products.append(totalPrice);

const contact = {};
class contactData {
  constructor(lastname, firstname, address, city, email) {
    this.lastName = lastname;
    this.firstName = firstname;
    this.address = address;
    this.city = city;
    this.email = email;
  }
}

const regexGlobal =
  /^[a-z ,.'-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/i;
const regexAddress =
  /^[a-z0-9 ,.'-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/i;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function order(e) {
  e.preventDefault();
  let lastname = document.getElementById("lastName").value;
  let firstname = document.getElementById("firstName").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  console.log(regexGlobal.test(lastname));
  console.log(regexGlobal.test(firstname));
  console.log(regexAddress.test(address));
  console.log(regexGlobal.test(city));
  console.log(regexEmail.test(email));
  if (
    regexGlobal.test(lastname) &&
    regexGlobal.test(firstname) &&
    regexAddress.test(address) &&
    regexGlobal.test(city) &&
    regexEmail.test(email)
  ) {
    let contact = new contactData(firstname, lastname, address, city, email);
    console.log(storage);
    let products = [];
    storage.forEach((prod) => {
      products.push(prod._id);
    });
    let data = {
      contact: contact,
      products: products,
    };
    console.log(data);
    let dataToSend = JSON.stringify(data);
    localStorage.setItem("data", dataToSend);
    postOrder(dataToSend);
    alert("OK");
    return true;
  }
  alert("Veuillez saisir tous les champs");
}

function postOrder(dataToSend) {
  fetch("http://localhost:3000/api/furniture/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dataToSend,
  })
    .then(function (orderNumber) {
      return orderNumber.json();
    })
    .then(function (confirmationId) {
      localStorage.setItem("orderId", confirmationId.orderId);
      localStorage.setItem("contact", confirmationId.contact);
      console.log(confirmationId.orderId);
      console.log(confirmationId.contact);
      window.location.href = "confirmation.html";
    });
}
