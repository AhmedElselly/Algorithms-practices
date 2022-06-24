const beaDay = (i, j, k) => {
  let beautiful = [];
  for(let start = i; start <= j; start++){
    let numString = start+"";
    let reverse = numString.split('').reverse().join('');
    if((start - reverse*1) % k === 0){
      beautiful.push(start)
    }
  }
  return beautiful.length;
}

// console.log(beaDay(20, 23, 6));
// console.log(beaDay(13, 45, 3));
console.log(beaDay(49860, 205494, 155635764));