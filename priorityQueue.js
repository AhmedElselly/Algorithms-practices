class PriorityQueue{
	constructor(){
		this.values = [];
	}

	enqueue(val, priority){
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}

	bubbleUp(){
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0){
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if(element.priority <= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	dequeue(){
		const max = this.values[0];
		const end = this.values.pop();
		this.values[0] = end;
		this.sinkDown();
		return max;
	}

	sinkDown(){
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while(true){
			let leftIdx = 2 * idx + 1;
			let rightIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if(leftChild < length){
				leftChild = this.values[leftIdx];
				if(leftChild.priority > element.priority){
					swap = leftIdx;
				}
			}

			if(rightChild < length){
				rightChild = this.values[rightIdx];
				if(rightChild.priority > element.priority){
					swap = rightIdx;
				}
			}
			
			if(swap === null) break;
		}
	}
}

class Node{
	constructor(val, priority){
		this.val = val;
		this.priority = priority;
	}
}

let ER = new PriorityQueue();
ER.enqueue('flu', 1);
ER.enqueue('covid19', 5);
ER.enqueue('gunshot', 10);

console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())