class Stack{
	cosntructor(){
		this.items = [];
	}

	push(item){
		return this.items.push(item);
	}

	pop(item){
		return this.items.pop(item);
	}

	peek(item){
		return this.items[this.items.length - 1];
	}

	isEmpty(){
		return this.items.length === 0;
	}

	size(){
		return this.items.length;
	}

	clear(){
		this.items = [];
	}
}