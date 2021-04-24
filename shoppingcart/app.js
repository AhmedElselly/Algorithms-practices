// const products = [
// 	{id: 0, name: 'Milk', price: 15},
// 	{id: 1, name: 'Bread', price: 4},
// 	{id: 2, name: 'Rice', price: 9},
// 	{id: 3, name: 'Coffee', price: 14},
// ]

// var cart = {};

// // cart.name = 'milk'
// // console.log(cart)

// products.forEach(function(item) {
// 	const body = document.querySelector('body')
// 	const div = document.createElement('div');
	
// 	div.innerHTML = `<h3>${item.name}</h3> ${item.price}`;
// 	console.log(item)
// 	body.appendChild(div)

// 	// cart[namer] = item.name.toLowerCase();
// 	div.addEventListener('click', e => {
// 		let namer = item.name.toLowerCase();
// 		if(!cart[namer]){
// 			cart[namer] = {
// 				name: item.name,
// 				price: item.price,
// 				qty: 1,
// 				subTotal: function(){
// 					return this.price * this.qty;
// 				}
// 			}
// 		} else {
// 			cart[namer].qty++;
// 		}
		
// 	})

// })


var body = document.querySelector('body');
const itemInput = document.createElement('input');
const priceInput = document.createElement('input');
const qtyInput = document.createElement('input');

const button = document.createElement('button');
const label1 = document.createElement('label');
const label2 = document.createElement('label');
const label3 = document.createElement('label');
itemInput.setAttribute('type', 'text');
priceInput.setAttribute('type', 'number');
qtyInput.setAttribute('type', 'number');

label1.innerText = 'Item';
label2.innerText = 'price';
label3.innerText = 'quantity';

button.innerText = 'Add Item';

body.appendChild(label1);
body.appendChild(itemInput);
body.appendChild(label2);
body.appendChild(priceInput);
body.appendChild(label3);
body.appendChild(qtyInput);
body.appendChild(button)

// var inputValue = itemInput.value;
// h3.innerText = inputValue;

// body.appendChild(h3)



button.addEventListener('click', e => {
	e.preventDefault();
	console.log('added an item')
	const productName = document.createElement('h3');
	const productPrice = document.createElement('h3');
	const productQty = document.createElement('h3');
	
	var textVal = e.target.value;
	productName.innerText = textVal;
	body.appendChild(productName)
	body += productName.innerText;


	// console.log(e.target.value);
	var textVal = e.target.value;
	productPrice.innerText = `$${textVal}`;
	// body.appendChild(productPrice)
	body += productPrice.innerText;

	// console.log(productName.innerText)
	
})