function menuSections() {

    let itemsDiv = document.querySelector(".items");
    if (!itemsDiv) return;

    createItems(itemsDiv);
    
    let buttons = document.querySelectorAll(".button");
    if (!buttons) return;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            
        })
    })
}

function createItems(itemsDiv) {
    itemArray.forEach((item,index) => {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        
        let img = document.createElement("img");
        img.src = item.imgSource;
        img.classList.add("item__image");

        let namePriceDiv = document.createElement("div");
        namePriceDiv.classList.add("item__name-price");

        let name = document.createElement("h2");
        name.innerHTML = item.name;
        name.classList.add("item__name");

        let price = document.createElement("h2");
        price.innerHTML = item.price + " €";
        price.classList.add("item__price");

        namePriceDiv.appendChild(name);
        namePriceDiv.appendChild(price);

        let description = document.createElement("p");
        description.innerHTML = item.description;
        description.classList.add("item__description");

        itemDiv.appendChild(img);
        itemDiv.appendChild(namePriceDiv);
        itemDiv.appendChild(description);
        itemsDiv.appendChild(itemDiv);
    })
}