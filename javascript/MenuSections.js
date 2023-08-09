function menuSections() {

    let itemsDiv = document.querySelector(".items");
    if (!itemsDiv) return;

    let menuSection = document.querySelector(".menu-sections");
    if (!menuSection) return;

    createButtons(menuSection);
    createItems(itemsDiv);
    
    let buttons = document.querySelectorAll(".button");
    if (!buttons) return;

    let items = document.querySelectorAll(".item");
    if (!items) return;

    displayCategoryItems(categories.side_dish, items);

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            displayCategoryItems(button.getAttribute("data-category"), items);
        })
    })
}

function createButtons(menuSection) {
    let categoryArray = Object.values(categories);
    categoryArray.forEach(section => {
        let button = document.createElement("button");
        button.innerHTML = section;
        button.classList.add("button");
        button.setAttribute("data-category", section);

        menuSection.appendChild(button);
    
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
        itemDiv.setAttribute('data-category',item.category);
        itemsDiv.appendChild(itemDiv);
    })
}

function displayCategoryItems(section, items){
    items.forEach(item => {
        console.log(section);
        console.log(item.getAttribute("data-category"));
        console.log("-----");
        if (item.getAttribute("data-category") !== section) item.style.display = "none";
        else if (item.getAttribute("data-category") === section) item.style.display = "block";
    })
}