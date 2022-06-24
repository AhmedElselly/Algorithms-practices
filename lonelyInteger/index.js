const lonelyInteger = arr => {
    let i = 0;
    let obj = {};
    while(i < arr.length){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
        i++;
    }
    let result = [];
    for(let key in obj){
        if(obj[key] === 1){
            result.push(key);
        }
    }
    return result[0];
}

console.log(lonelyInteger([1,2,3,4,3,2,1]));