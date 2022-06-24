const findStringDom = str => {
    str = str.replace(/</g, '');
    str = str.replace(/>/g, '');
    // console.log(str)

    let arr = [
        'div',
        'b',
        'i',
        'p',
        'em'
    ]

    const findElem = ele => {
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                if(arr[i][j] === ele){
                    return arr[i]
                }
                console.log(arr[i][j])
            }
        }
    }

    for(let i = 0; i < str.length; i++){
        for(let j = str.length - 1; j >= 0; j--){
            if(str[i] !== str[j]){
                console.log(str[i])
                return findElem(str[i]);
            }
        }
    }

    
    
} 

// console.log(findStringDom('<div><div><b></b></div></p>'));
console.log(findStringDom('<div>abc</div><p><em><i>test test test</b></em></p>'));