class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}


class SinglyLinkedList{
	constructor(){

		this.head = null;
		this.count = 0;
	}

	push(val){
		if(!this.head){
			this.count++;
			return this.head = new Node(val);
		}

		// if this.head has a value
		let current = this.head; // this.head.next
		// current.next = this.head.next.next ....etc till we reach to null
		while(current.next){ 
			current = current.next
		}
		// we will hit the null and set this null to be the new Node(val)
		current.next = new Node(val);
		// increase this.count
		this.count++;
	}

	getElement(index){
		let node = this.head;
		for(var i = 0; i < index; i++){
			node = node.next;
		}
		return node;
	}

	insert(val, index){
		// checking if the index = 0, then set the this.head = new Node(val)
		if(index === 0){
			this.count++;
			return this.head = new Node(val);
		}

		// if index > 0 
		// will have a pointer to current = this.head
		let current = this.head;
		// keep looping till we hit the index
		let prev = this.getElement(index - 1);
		let node = new Node(val);
		let temp = prev.next;
		prev.next = node;

		node.next = temp;
		this.count++;
		return this;

		// and will have a pointer to the prev
	}
}

const list = new SinglyLinkedList();
list.push(1);
// list.push(2);
list.push(3);
console.log(list.insert(2, 1));

// console.log(list.head)