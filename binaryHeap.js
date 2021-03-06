class MaxBinaryHeap{
	constructor(){
		this.values = [41, 39, 33, 18, 27, 12];
	}

	insert(element){
		this.values.push(element);
		this.bubbleUp();
	}

	bubbleUp(){
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0){
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if(element <= parent) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	extractMax(){
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
				if(leftChild > element){
					swap = leftIdx;
				}
			}

			if(rightChild < length){
				rightChild = this.values[rightIdx];
				if(rightChild > element){
					swap = rightIdx;
				}
			}


			if(swap === null) break;
		}
	}
}

let heap = new MaxBinaryHeap();
heap.insert(55);

console.log(heap);