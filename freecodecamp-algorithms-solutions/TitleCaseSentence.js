function titleCase(str){
	let string = str.toLowerCase();
	console.log(string);
	let arr = string.split(' ');
	let capitalized = [];
	let arr2 = [];
	for(let i = 0; i < arr.length; i++){
		capitalized = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		arr2.push(capitalized)
	}
	let str2 = arr2.join(' ')
	return str2;
}

console.log(titleCase('I\'m a little tea pot'));
console.log(titleCase('sHoRt AnD sToUt'));
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));