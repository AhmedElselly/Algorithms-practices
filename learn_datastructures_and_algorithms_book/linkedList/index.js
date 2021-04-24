const Node = require('./Node');

function defaultEquals(a, b){
	return a === b;
}

class LinkedList{
	constructor(equalFn=defaultEquals){
		this.head = null;
		this.count = 0;
		this.equalFn = equalFn;
	}

	push(val){
		var value = new Node(val);
		
		if(!this.head){
			this.count++;
		  return this.head = value;
		}

		var current = this.head;
		while(current.next){ // null - 2
			current = current.next;
		}
		current.next = value;

		this.count++;
		return this;
	}

	getElementAt(index){
		if(index >= 0 && index <= this.count){
			let node = this.head;
			for(var i = 0; i < index && node != null; i++){
				node = node.next;
			}
			return node;
		}

		return undefined;
	}

	removeAt(index){
		if(this.head){
			let current = this.head;

			if(index === 0){
				this.head = current.next;
				// console.log(current)
			} else {
				let previous = this.getElementAt(index - 1);
				current = previous.next;
				// for(var i = 0; i < index; i++){
				// 	console.log(previous, current)
				// 	previous = current;
				// 	current = current.next;
				// }
				previous.next = current.next;
			}
		}
		this.count--;
		return this;
	}

	insert(element, index){
		if(index >= 0 && index <= this.count){
			let node = new Node(element);
			if(index === 0){
				this.head = node;
			} else {
				let prev = this.getElementAt(index - 1);
				let current = prev.next;
				prev.next = node;
				node.next = current;
			}
			this.count++;
			return true;
		}
		return false;
	}

	indexOf(element){
		let current = this.head;
		for(var i = 0; i < this.count && current != null; i++){
			if(defaultEquals(element, current.element)){
				return i;
			}
			current = current.next;
		}
		return -1;
	}

	remove(element){
		const index = this.indexOf(element);
		return this.removeAt(index);
	}

	size(){
		return this.count;
	}

	isEmpty(){
		return this.size() === 0;
	}

	getHead(){
		return this.head;
	}

	toString(){
		if(this.head === null){
			return '';
		}
		let objectString = `${this.head.element}`;
		let current = this.head.next;
		for(var i = 1; i < this.size() && current != null; i++){
			objectString = `${objectString}, ${current.element}`;
			current = current.next;
		}
		return objectString;
	}

}

const linkedList = new LinkedList();
linkedList.push(1)
// linkedList.push(3)
linkedList.push(3)
// linkedList.push(4)
// linkedList.removeAt(0)
linkedList.insert(2, 1);
linkedList.insert(4, 3);
console.log(linkedList.toString());

console.log(linkedList.head.next.next)

