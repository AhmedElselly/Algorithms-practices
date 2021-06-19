class Node{
	constructor(element, next, prev){
		this.element = element;
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList{
	constructor(){
		this.head = undefined;
		this.tail = undefined;
		this.count = 0;
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

	insert(element, index){
		if(index >= 0 && index <= this.count){
			const node = new Node(element);
			let current = this.head;
			if(index === 0){
				if(this.head === undefined){
					this.head = node;
					this.tail = node;
				} else {
					node.next = this.head;
					console.log(current)
					current.prev = node;
					this.head = node;
				}
			} else if(index === this.count){
				current = this.tail;
				current.next = node;
				node.prev = current;
				this.tail = node;
			} else {
				const previous = this.getElementAt(index - 1);
				let current = previous.next;
				node.next = current;
				previous.next = node;
				current.prev = node;
				node.prev = previous;
			}
			this.count++;
			return true;
		}
		return false;
	}

}
//      
// 1 => 2 => 3 => 4 => 5

const test = new DoublyLinkedList();

test.insert(1, 0)
test.insert(2, 1)
test.insert(4, 2)
test.insert(3, 2)

console.log(test.head.next)

