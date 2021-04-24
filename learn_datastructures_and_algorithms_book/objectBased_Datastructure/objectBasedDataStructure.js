class Stack{
	constructor(){
		this.items = {};
		this.count = 0;
	}

	push(element){
		this.items[this.count] = element;
		this.count++;
	}

	print(){
		console.log(this.items);
	}

	size(){
		console.log(this.count)
		return this.count;
	}

	isEmpty(){
		return this.count === 0;
	}

	pop(){
		if(this.isEmpty()){
			return undefined;
		}

		this.count--;
		var result = this.items[this.count];
		console.log('Pop', result);
		delete this.items[this.count];
		return result;
	}

	peek(){
		if(this.isEmpty()){
			return undefined;
		}

		return this.items[this.count - 1];
	}

	clear(){
		// this.items = {};
		// this.count = 0;

		while(!this.isEmpty()){
			this.pop();
		}
	}

	toString(){
		if(this.isEmpty()){
			return undefined;
		}
		var i = 0;
		var objects = `${this.items[i]}`;
		for(i += 1; i < this.count; i++){
			objects = `${objects} ${this.items[i]}`;
		}

		return objects;
	}
}

module.exports = Stack;

// const stack = new Stack();
// stack.push('Ahmed');
// stack.push('loves');
// stack.push('Kris');
// stack.print();
// stack.size();
// console.log(stack.isEmpty());
// stack.pop();

// stack.print()
// console.log(stack.peek())
// stack.clear();
// stack.print()
// console.log(stack.toString())