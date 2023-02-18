function stack(word){

    var letters = []

    var rwords

    //check the word is palindrome or not

    // put letters of word into stack
    for(let i; i < word.length; i++){
        letters.push(word[i])
    }

    //pop the array and one by one store in rwords
    for(let i; i < word.length; i++){
        rwords += letters.pop(word[i])
    }

    if(word === rwords){
        console.log("It is plaindrome")
    }else{
        console.log("It is not plaindrome")
    }
}
