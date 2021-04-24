class Dictionary{
	constructor(){
		this.count = 0;
		this.table = {};
	}

	// making key value pairs
	put(key, value){
		this.table[key] = value;
		this.count++;
		return this.table;
	}

	get(key){
		return this.table[key];
	}

	toArray(){
		let arr = [];
		for(var key in this.table){
			arr.push(this.table[key]);
		}
		return arr;
	}

	hasKey(key){
		if(this.table[key]){
			return true;
		}
		return false;
	}

	keys(){
		return Object.keys(this.table)
	}

	values(){
		return Object.values(this.table)
	}

	remove(key){
		const removed = this.table[key];
		delete this.table[key];
		this.count--;
		return true;
	}
}

const dict = new Dictionary();
dict.put('firstName', 'Ahmed')
dict.put('lastName', 'Elselly')
dict.put('no', 'no')



// console.log(dict.remove('no'));
console.log(dict.toArray());