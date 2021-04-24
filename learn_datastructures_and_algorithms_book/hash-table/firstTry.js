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
}

class Hash{
	constructor(toStrFn = defaultToString){
		this.toStr = toStrFn;
		this.table = {};
	}

	loseloseHashCode(key){
		if(typeof key === 'number'){
			return key;
		}

		const tablekey = this.toStr(key);
		let hash = 0;
		for(var i = 0; i < tablekey.length; i++){
			hash += tablekey.charCodeAt(i);
		}
		return hash % 37;
	}

	hashCode(key){
		return this.loseloseHashCode(key);
	}

	put(key, value){
		if(key !== null && value !== null){
			const position = this.hashCode(key);
			this.table[position] = new ValuePair(key, value);
			return true;
		}
		return false;
	}
}

const hash = new Hash();

hash.put('firstName', 'ahmed')
hash.put('lastName', 'mido')

console.log(hash.table)