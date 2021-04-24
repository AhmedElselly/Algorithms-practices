class Stack{
	constructor(){
		this.count = 0;
		this.items = {};
	}

	push(ele){
		this.items[this.count] = ele;
		this.count++;
	}

	size(){
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
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}

	peek(){
		if(this.isEmpty()){
			return undefined;
		}
		return this.items[this.count - 1];
	}

	toString(){
		if (this.isEmpty()) {
			return '';
		}
		let objString = `${this.items[0]}`; // {1}
		for (let i = 1; i < this.count; i++) { // {2}
			objString = `${objString},${this.items[i]}`; // {3}
		}
		return objString;
	}
}

function decimalToBinary(decNumber){
	const stack = new Stack();
	let number = decNumber;
	let rem;
	let binaryString = '';
	while(number > 0){
		rem = Math.floor(number % 2);
		stack.push(rem);
		number = Math.floor(number / 2);
	}

	while(!stack.isEmpty()){
		binaryString += stack.pop().toString();
	}

	return binaryString;
}

console.log(decimalToBinary(233));