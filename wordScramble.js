const array = ['Dating', 'Frosty', 'Alien', 'Mozza'];

function wordScramble(arr){
	let word = '';
	let subArr = [];
	const rand = Math.floor(Math.random() * arr.length);
	word = arr[rand];
	const randomized = arr[rand].split('').sort().join('');
	
	return randomized;
}

console.log(wordScramble(array));