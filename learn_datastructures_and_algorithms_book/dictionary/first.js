const defaultToString = item => {
	if(item === null){
		return 'Null';
	} else if(item === undefined){
		return 'Undefined';
	} else if(typeof item === 'string' || item instanceof String){
		return `${item}`;
	}

	return item.toString();
}

class ValuePair{
	constructor(key, value){
		this.key = key;
		this.value = value;
	}

	toString(){
		return `[#${this.key}: ${this.value}]`;
	}
}

class Dictionary{
	constructor(toStr=defaultToString){
		this.toStrFn = toStr;
		this.table = {};
	}

	hasKey(key){
		return this.table[this.toStrFn(key)] != null;
  	}

  	set(key, value){
  		if(key != null && value != null){
  			const tableKey = this.toStrFn(key);
  			this.table[tableKey] = new ValuePair(key, value);
  			return this.table;
  		}
  	}

  	remove(key){
  		if(this.hasKey(key)){
  			delete this.table[this.toStrFn(key)];
  			return true
  		}
  		return false;
  	}

  	get(key){
  		if(this.hasKey(key)){
  			return this.table[this.toStrFn(key)];
  		}
  		return null;
  	}

  	keyValues(){
  		const valuePairs = [];
  		for(const k in this.table){
  			if(this.hasKey(k)){
  				valuePairs.push(this.table[k]);
  			}
  		}
  		return valuePairs;
  	}

  	keys(){
  		return this.keyValues().map(valuePairs => valuePairs.key);
  	}

  	values(){
  		return this.keyValues().map(valuePairs => valuePairs.value);
  	}

  	size(){
  		return this.keyValues().length;
  	}

  	isEmpty(){
  		return this.size() === 0;
  	}

  	clear(){
  		this.table = {};
  	}

  	keyToString(){
  		if(this.isEmpty()){
  			return '';
  		}
  		const valuePairs = this.keyValues();
  		// console.log(valuePairs)
  		let objToString = `${valuePairs[0].toString()}`;
  		for(var i = 1; i < valuePairs.length; i++){
  			objToString = `${objToString}, ${valuePairs[i].toString()}`;
  		}
  		return objToString;
  	}
}


const obj = new Dictionary();
obj.set('FirstName', 'Ahmed');
obj.set('LastName', 'Elselly');
// obj.remove('LastName');
console.log(obj.keyValues());
// console.log(obj.values());
console.log(obj.keyToString());

// console.log(obj.table.FirstName.key);
// console.log(obj.table.LastName.key);