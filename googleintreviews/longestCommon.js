const longest = (str1, str2) => {
	let arr = [];
	let result = '';
	function detect(s1, s2){
		// loop over second string 
		let string = s1.length > s2.length ? s2 : s1; 
		for(var i = 0; i < s2.length; i++){
			// if value exists push to array
			// console.log(s1.indexOf(s2[i]))
			if(s1.indexOf(s2[i]) !== -1){
				arr.push(s2[i]);
			}
		}
		// detect same value of s2[i] inside s1 using indexOf()
	}

	detect(str1, str2);
	result = arr.join();
	return result;
}

console.log(longest('ABAZDC', 'ABAD'))
console.log(longest('AGGTAB', 'GXTXAYB'))
console.log(longest('aaaa', 'aa'))
console.log(longest('ABBA', 'ABCABA'))