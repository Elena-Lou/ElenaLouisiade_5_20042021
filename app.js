const product = document.getElementById('product')


fetch('http://localhost:3000/api/furniture')
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log(data)
    data.forEach(element => {
        console.log(element.name)
        console.log(element.price)
        console.log(element.imageUrl)
    
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = product.card;
        product.append(card);
        
        let image = document.createElement("img");
        image.className = "card__image";
        image.src = element.imageUrl;

        card.append(image);        
          
        let name = document.createElement('h5');
        name.className = 'card__title';
        name.innerHTML = element.name;
        card.append(name);

        let price = document.createElement("p");
        price.className = "card__price";
        price.innerHTML = element.price;
        card.append(price);

    });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

