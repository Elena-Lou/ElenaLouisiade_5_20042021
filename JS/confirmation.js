/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const confirmation = document.getElementById("confirmation");

const cart = localStorage.getItem("cart");
const contact = JSON.parse(localStorage.getItem("contact"));
const orderId = localStorage.getItem("orderId");
const total = localStorage.getItem("total");
console.log(contact);

if(orderId == null){
    window.location.href = "index.html";
} else {
    let customer = document.createElement("div");
    customer.className = "confirmation__name";
    customer.innerHTML += `<p>Merci <strong>${contact.firstName} ${contact.lastName}</strong> pour votre commande</br><strong>${orderId}</strong></p>`;
    confirmation.append(customer);

    let orderTotal = document.createElement("div");
    orderTotal.className = "confirmation__total";
    orderTotal.innerHTML += `<p>Le montant total est de <strong>${total}</strong>€`;
    confirmation.append(orderTotal);

    let orderEmail = document.createElement("div");
    orderEmail.className = "confirmation__email";
    orderEmail.innerHTML += `<p>Un email de confirmation vous a été envoyé à l'adresse : <strong>${contact.email}</strong></p>`;
    confirmation.append(orderEmail);

    
}

setTimeout(function () {
  localStorage.clear();
  window.location.href = "index.html";
}, 3000);
