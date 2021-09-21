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
        const itemName = item.title;
        // console.log(itemName);
        const info = document.createElement("h2");
        // info.style.flexBasis = "250px";
        info.innerHTML = itemName;
        itemDiv.appendChild(info);
        
    })
}



