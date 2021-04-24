var arr1 = [1,2,3,4];

// var arr2 = arr1;
// arr2[0] = 5;

var arr2 = [...arr1]; // same result if used Array.from(arr1);
arr2[0] = 5;
console.log(arr2);