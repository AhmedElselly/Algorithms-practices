const angryPro = (k, arr) => {
  // Arrival times go from on time (ArrivalTime <= 0) e.i. [-2, -1, 0]
  let early = [];
  let late = [];
  arr = arr.sort();
  console.log(arr, k, arr.length)
  
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] <= 0){
      console.log(arr[i] <= 0 ? true:false)
      early.push(arr[i]);
    } else {
      console.log(arr[i] <= 0 ? true:false)
      late.push(arr[i]);
    }
  }
  if(early.length >= k){
    return 'NO'
  } else {
    return 'YES';
  }
  
  // Arrival Late (ArrivalTime > 0) e.i. [1, 2]
}

console.log(angryPro(3, [-1,-3,4,2]));
console.log('============================');
console.log(angryPro(2, [0,-1,2,1]));