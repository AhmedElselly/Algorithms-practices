const utopianTree = n => {
  let count = 1;
  let height = 1;

  while(count <= n){
    if(count % 2 !== 0){
      height *= 2;
      console.log(height)
    } else {
      height++;
      console.log(height)
    }
    count++;
  }
  return height;
}

console.log(utopianTree(5))