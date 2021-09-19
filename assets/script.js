let i = 0;
const item = document.getElementById('products');

const cart = document.getElementById('cart-input');
cart.addEventListener('click', () => {
    i++;
    console.log(i);
    document.getElementById('cart-input').innerHTML=i;
});


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> {
                displayProducts(data)
                // console.log(data)
            });

// console.log(data[0].name);

const displayProducts = (data) => {
    for(let i=0; i<20; i++){
        const title = data[i].title;
        console.log(title)
        const price = data[i].price;
        // console.log(data[0]);

        const info = `<div><h2>${title}</h2><p>${price}</p></div>`;
        // console.log(firstItem.title);
        item.innerHTML = info;
    }
    
}



