var body = document.querySelector('body');
var button = document.createElement('button');
var productName = document.createElement('input');
var productPrice = document.createElement('input');
var productQty = document.createElement('input');


body.appendChild(productName)
body.appendChild(productPrice)
body.appendChild(productQty)
button.innerText = 'Add Item';
body.appendChild(button)

function Product(name, price, qty){
	this.name = name;
	this.price = price;
	this.qty = qty;

	this.total = function(){
		return this.price * this.qty;
	}
}
var allProducts = [];

button.addEventListener('click', e => {
	var item = new Product(productName.value, productPrice.value, productQty.value);
	console.log(item.total())
	var added = {name: item.name, price: item.price, quantity: item.qty};
	// console.log(allProducts)
	allProducts.push(added)
	var div = document.createElement('div');
	div.innerHTML = `<h4>Item: ${item.name}</h4><div>Price: ${item.price}</div><div>Quantity: ${item.qty}</div>`;
	body.appendChild(div);
	
	// var cartProducts = pushed(added);
	let btn = document.createElement('button');
	btn.innerText = 'add to cart'
	div.appendChild(btn);

	btn.setAttribute('class', 'addToCart');
	btn.addEventListener('click', e => {
		e.preventDefault();
		var cart = new Cart(allProducts);
		console.log(cart.subTotal())
	})
})

// function pushed(items){
// 	console.log(items.length);
// 	for(var i = 0; i < items.length; i++){
// 		console.log(items[i])
// 		allProducts.push(items[i]);
// 	}
// 	return allProducts;
// }

function Cart(products){
	this.products = products;
	
	this.subTotal = function(){
		console.log(this.products);
	}


}

// var item = new Cart('Milk', 15, 1);
// productName = 'milk';
// productPrice = 15;
// productQty = 2;
// var item = new Cart(productName, productPrice, productQty)
// console.log(item)

