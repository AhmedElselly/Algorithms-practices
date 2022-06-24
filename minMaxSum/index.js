const minMax = arr => {
    let min = 0;
    let max = 0;
    arr = arr.sort();
    for(let i = 0; i < arr.length - 1; i++){
        
        min += arr[i];
    }

    for(let i = arr.length - 1; i > 0; i--){
        max += arr[i];
    }

    return [min, max];
}

console.log(minMax([7, 69, 2, 221, 8974]))
// console.log(minMax([1,3,5,7,9]))