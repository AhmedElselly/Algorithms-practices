class Cart{
	constructor(oldCart){
		this.items = oldCart.items || {};
		this.totalQty = oldCart.totalQty || 0;
		this.totalPrice = oldCart.totalPrice || 0;
	}
	// adding item to the cart object with key value pairs
	// the item will be stored as {id: {
			// item: {
				// id: '',
				// title: '',
				// price: '',
				// the rest data
			// },
			// qty: '',
			// price: ''
		// }}
	add(item, id){
		let product = this.items[id];
		// checking if the product not stored in the cart
		if(!product){
			product = this.items[id] = {item: item, qty:0, price:0};
		}
		// increasing the quantity if that item
		product.qty++;
		// getting the price of that item after increasing it's quantity
		product.price = product.item.price * product.qty;
		// increasing the totalQty by 1
		this.totalQty++;
		// adding the total item price to the total price
		this.totalPrice += product.price;
	}
}