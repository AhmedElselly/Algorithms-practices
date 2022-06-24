const miniMaxSum = arr => {
    // compare
    // 1+3+5+7
    // 3+5+7+9
    let result = [];
    const sliced = (f, s) => {
        let count = 0;
        for(let i = f; i < s; i++){
            count+=arr[i];
        }
        result.push(count);
    }

    sliced(0, arr.length - 1);
    sliced(1, arr.length);

    console.log(result[0], result[1]);
}

console.log(miniMaxSum([1,3,5,7,9]));
console.log(miniMaxSum([7, 69, 2, 221, 8974]))