const bigSum = arr => {
  let total = 0;
  for (var i = 0; i < arr.length; i++){
    total+= arr[i];
  }
  return total;
}

console.log(bigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));