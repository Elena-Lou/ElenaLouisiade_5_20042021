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
const contact = localStorage.getItem("contact");
const orderId = localStorage.getItem("orderId");
const total = localStorage.getItem("total");
console.log(contact);

if(orderId == null){
    window.location.href = "index.html"
} else {
    let customer = document.createElement("p");
    customer.className = "confirmation__name"
    customer.innerHTML = "Merci " + contact.firstName + " " + contact.lastName + " pour votre commande " + orderId;
    confirmation.append(customer);

    let orderTotal = document.createElement("p");
    orderTotal.className = "confirmation__total";
    orderTotal.innerHTML = "Le montant total est de " + total +"€"
    confirmation.append(orderTotal);

    let orderEmail = document.createElement("p");
    orderEmail.className = "confirmation__email";
    orderEmail.innerHTML = "Un email de confirmation vous a été envoyé à l'adresse : " + contact.email;
    confirmation.append(orderEmail);

    
}

// setTimeout(function () {
//   localStorage.clear();
//   window.location.href = "index.html"
// }, 3000);
