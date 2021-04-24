const Node = require('./Node');

function equalFunction(a, b){
	return a === b;
}

class SingleLinkedList{
	constructor(){
		this.head = null;
		this.count = 0;
		this.equalFn = equalFunction;
	}

	size(){
		return this.count;
	}

	push(element){
		var newNode = new Node(element);
		var current = this.head;
		if(!this.head){
			this.head = newNode;
			// this.count++;
		} else {
			while(current.next){
				current = current.next;
			}
			
			current.next = newNode;
		}
		this.count++;
		return this;
	}

	isEmpty(){
		return this.size === 0;
	}

	getElementAt(index){
		if(index >= 0 && index <= this.size()){
			var node = this.head;
			var count = 0;
			for(var i = 0; i < index && node != null; i++){
				node = node.next;
			}
			
			return node;
		} else {
			return 'Not Found'	
		}
	}

	insert(element, index){
		if(!this.head){
			this.head = new Node(element);
		}
		let newNode = new Node(element);
		let current = this.getElementAt(index);
		let prev = this.getElementAt(index - 1);
		prev.next = newNode;
		newNode.next = current;
		this.count++;
		return this;
	}

	indexOf(element){
		let current = this.head;
		for(var i = 0; i < this.count && current != null; i++){
			if(this.equalFn(element, current.element)){
				return i;
			}
			current = current.next;
		}
		return -1;
	}

	removeAt(index){
		if(index >= 0 && index < this.count){
			let current = this.head;

			if(index === 0){
				this.head = current.next;
			} else {
				let previous;
				for(var i = 0; i < index; i++){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			this.count--;
			return current.element;
		}
		return undefined;
	}

	remove(element){
		const index = this.indexOf(element);

		this.count--;
		return this.removeAt(index);
	}
}
   // c
// 1 -> 2 -> 3
        // c.n   
const list = new SingleLinkedList();
list.push(1)
list.push(2)
list.push(3)

// console.log(list.insert(2, 1));
console.log(list.removeAt(1));


// console.log(list.head)