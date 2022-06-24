const compareTriplets = (a, b) => {
  let i = 0;
  let obj = {
    a: 0,
    b: 0
  }
  console.log(i)
  while(i <= a.length){
    
    if(a[i] > b[i]){
      obj['a'] += 1
    } else if(a[i] < b[i]){
      obj['b'] += 1
    }     
    i++;
  }
  
  console.log(obj)
  let arr = [];
  for(let key in obj){
    arr.push(obj[key]);
  }
  return arr;
}


console.log(compareTriplets([1,2,3], [3,2,1]));