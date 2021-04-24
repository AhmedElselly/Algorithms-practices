class Queues{
	constructor(){
		this.count = 0;
		this.items = {};
		this.lowestCount = 0;
	}

	size(){
		return this.count;
	}

	enqueue(element){
		this.items[this.count] = element;
		this.count++;

		return this.items;
	}

	isEmpty(){
		return this.length === 0;
	}

	dequeue(){
		if(this.isEmpty()){
			return undefined;
		}

		const first = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		this.count--;
		this.lowestCount++;
		return first;
	}

	peek(){
		if(this.isEmpty()){
			return undefined;
		}

		let first = this.items[this.lowestCount];
		return first;
	}

	clear(){
		if(this.isEmpty()){
			return undefined;
		}

		while(!this.isEmpty()){
			this.dequeue();
		}
	}

	toString(){
		// var objectToString = '';
		if(this.isEmpty()){
			return undefined;
		}
		// var i = 0;
		var stringified = this.items[this.lowestCount]; // '0': 1
		for(var i = this.lowestCount + 1; i < this.count; i++){
			stringified = `${stringified}, ${this.items[i]}`;
			// this.count--;
		}
		return stringified;
	}
}

// const queues = new Queues();
// queues.enqueue(1)
// queues.enqueue(2)
// queues.enqueue(3)
// // queues.clear()
// console.log(queues.toString())

// console.log(queues.items)

module.exports = Queues;