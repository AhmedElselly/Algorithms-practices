function anagram(str1, str2){
	// loop over the first string
	if(str1.length !== str2.length){
		return false;
	}

	let obj = {};
	let count = 0;
	for(var i = 0; i < str1.length; i++){
		// find character by using indexOf	
		obj[str1[i]] ? obj[str1[i]] += 1 : obj[str1[i]] = 1;
	}
	

	for(var i = 0; i < str2.length; i++){
		if(!obj[str2[i]]){
			return false;
		} else {
			obj[str2[i]] -= 1;
		}
	}
	return true;
}


console.log(anagram('aaz', 'zza'))
console.log(anagram('anagram', 'nagaram'))