const array = [5,8,7,9,6,1,2,4,3,10];

const heap = arr => {
	let largest;
	let parent = arr.indexOf(arr[0]) / 2;
	let left = 2 * arr.indexOf(arr[0]);
	let right = (2 * arr.indexOf(arr[0])) + 1;
	return {left, right, parent}
}

console.log(heap(array));