const birds = arr => {
    let obj = {};
    
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }

    for(let int in obj){
        
    }

    return obj;
}

console.log(birds([1,1,2,2,3]));