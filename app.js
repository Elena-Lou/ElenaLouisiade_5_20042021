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

        let itemLink = document.createElement("a");
        itemLink.href = "product.html";
        product.append(itemLink);
    
        let card = document.createElement("article");
        card.className = "card";
        itemLink.append(card);
        
        let image = document.createElement("img");
        image.className = "card__image";
        image.src = element.imageUrl;
        card.append(image); 
        
        let text = document.createElement("div");
        text.className = "card__text";
        card.append(text);
          
        let name = document.createElement("h5");
        name.className = 'card__text__title';
        name.innerHTML = element.name;
        text.append(name);

        let price = document.createElement("p");
        price.className = "card__text__price";
        price.innerHTML = (element.price)/100+"€";
        text.append(price);

    });
});



