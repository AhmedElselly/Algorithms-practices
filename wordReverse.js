function wordReverse(word){
    var letters = [];
    var reword = '';
    // looping on every letter on the word
    for(var i =  0; i < word.length; i++){
        // pushing every letter to reword
        letters.push(word[i]);
    }

    for(var i = 0; i < word.length; i++){
        reword += letters.pop();
    }

    if (word === reword) {
        console.log(`${word} is palindrome`);
    } else {
        console.log(`${word} is not palindrome`);
    }
    // console.log(reword);
    // return reword;

}

wordReverse('racecar')