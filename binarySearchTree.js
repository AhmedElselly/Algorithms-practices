class Node {
	constructor(val){
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor(){
		this.root = null;
		this.length = 0;
	}

	insert(val){
		// console.log(this.root = val);
		// console.log(val)
		let existingRoot;
		if(!this.root){ // checking if there is root or not
			this.root = new Node(val); // if not putting the new node to be the
			existingRoot = this.root;
			this.length++;
			// console.log(existingRoot.val);
			return existingRoot;
		} else {
			var current = this.root;
			while(true){
				if(val === current.val) {
					console.log(`${val} already exists`)
					return false
				}
				if(val < current.val){
					if(current.left === null){
						current.left = new Node(val);
						this.length++;
						return this;
					} else {
						current = current.left;
						// console.log(current)
					}
				} else if(val > current.val){
					if(current.right === null){
						current.right = new Node(val);
						this.length++;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}		
	}

	find(val){
		if(this.length === 0){
			return false;
		} 

		var current = this.root;
		var found = false;
		while(current && !found){
			if(val < current.val){
				current = current.left;
			} else if(val > current.val){
				current = current.right;
			} else {
				found = true;
			}
		}
		if(!found) return `${val} is not found`;
		return current;
	}

	BFS(){
		var data = [],
			queue = [],
			node = this.root;
		queue.push(node);
		while(queue.length){
			node = queue.shift();
			data.push(node.val);
			if(node.left) queue.push(node.left);
			if(node.right) queue.push(node.right);
		}

		return data;
	}

	DFSPreOrder(){
		var data = [];
		
		function traverse(node){
			data.push(node.val);
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);
		}

		traverse(this.root);
		return data;
	}

	DFSPostOrder(){
		var data = [];

		function traverse(node){
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);
			data.push(node.val);
		}

		traverse(this.root)
		return data;
	}
}

var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(8);
// tree.root.left.right = new Node(9);
tree.insert(10);
tree.insert(8);
tree.insert(12);
tree.insert(20);
tree.insert(11);


tree.insert(2);


// tree.insert(4);
// tree.insert(2);
// console.log(tree.find(2));
// console.log(tree.BFS());
// console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());

// console.log(tree.root.left.right);