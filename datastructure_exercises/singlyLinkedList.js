class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList{
	constructor(){
		this.head = null; 
		this.tail = null; 
		this.length = 0;
	}

	push(val){
		var newNode = new Node(val);
		if(!this.length){
			this.head = newNode;
			this.tail = this.head;
			
			console.log('here')
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
			
		}

		this.length++;
		return this;
		
	}

	// pop(){
	// 	if(!this.head){
	// 		const error = 'No Nodes';
	// 		return error;
	// 	}
	// 	var current = this.head;
	// 	var newTail = current;
	// 	while(current.next){
	// 		newTail = current;
	// 		current = current.next;
	// 	}
	// 	this.tail = newTail;
	// 	this.tail.next = null;
	// 	this.length--;
	// 	if(this.length === 0){
	// 		this.head = null;
	// 		this.tail = null;
	// 	}
	// 	console.log(current.val)
	// 	console.log(newTail.val)
	// 	return current;
	// }

	pop(){
		if(!this.head){
			return undefined;
		}
		var current = this.head;
		var newTail = current;
		while(current.next){
			// console.log(current.next)
			newTail = current;
			current.next = current;
		}

		this.tail = newTail;
	}
}

const newNode = new SinglyLinkedList();
newNode.push(6);
newNode.push(9);
newNode.push(10);
newNode.push(11);
newNode.push(12);
newNode.push(13);

newNode.push(99);
newNode.pop();
// 1 -> 2 -> 3 -> 4 -> 5
     // c
     // nt
// console.log(newNode.head.next.next.next.next);
console.log(newNode)