class Dequeue{
	constructor(){
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
	}

	isEmpty(){
		return this.count === 0;
	}

	addBack(ele){
		this.items[this.count] = ele;
		this.count++;

		return this.items;
	}

	addFront(ele){
		if(this.isEmpty()){
			return this.addBack(ele);
		} else if(this.lowestCount > 0){
			this.lowestCount--;
			this.items[this.lowestCount] = ele;
		} else {
			for(let i = this.count; i > 0; i--){
				this.items[i] = this.items[i - 1];
			}
		}
		this.count++;
		this.lowestCount = 0;
		this.items[0] = ele;
	}

	clear(){
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
	}

	size(){
		return this.count;
	}

	removeFront(){
		var i = 0;
		delete this.items[i];
		this.count--;
		this.lowestCount++;
		return this.items;
	}

	removeBack(){
		this.count--;
		var end = this.items[this.count];

		delete this.items[this.count];
		return this.items;
	}

	toString(){
		// var i = 0;
		if(this.items[0] === undefined){
			this.count++;
		}
		var stringified = this.items[0];
		// this.count++;

		for(var i = 1; i < this.count; i++){
			stringified = `${stringified} ${this.items[i]}`;
		}

		return stringified;
	}
}

// const dequeue = new Dequeue();
// dequeue.addBack('Ahmed')
// dequeue.addBack('Kris')
// dequeue.addBack('Elena')
// dequeue.addFront('Elena')
// dequeue.removeFront();
// dequeue.addFront('Sandra')
// // dequeue.removeBack()
// console.log(dequeue.items);
// console.log(dequeue.toString());
// console.log(dequeue);

module.exports = Dequeue;