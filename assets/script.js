let i = 0;
const itemDiv = document.getElementById('products');
const url = 'https://fakestoreapi.com/products';

const cart = document.getElementById('cart-input');
cart.addEventListener('click', () => {
    i++;
    console.log(i);
    document.getElementById('cart-input').innerHTML = i;
});

fetch(url)
    .then(res => res.json())
    .then(data => {
        displayProducts(data)
        // console.log(data)
    });

// console.log(data[0].name);

const displayProducts = (display_items) => {

    display_items.map(item => {
        const itemImage = item.image;
        const itemName = item.title;
        const productId = item.id;
        // create product div
        const productDiv = document.createElement("div");
        productDiv.classList.add("product_div");
        const productDetails = `
            <img class="item-img" src="${itemImage}"/>
            <h4 style="margin: 10px 0px; items-align : center">${itemName}</h4>
            <h5 style="margin-bottom: 10px; items-align : center">${item.category}</h5>
            <div class="sub-div">
                <h2 style="items-align : center">$${item.price}</h2>
                <button class="btn" onclick="addItem(${productId})">Add To <i class="ri-shopping-cart-2-line"></i></button>
            </div>
        `;
        productDiv.innerHTML = productDetails;
        itemDiv.appendChild(productDiv);
    })
}


function addItem(id){
    console.log("Item clicked"+id);
}


