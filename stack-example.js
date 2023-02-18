function stack(word){

    var letters = []
    
    var rwords = ""

    //check the word is palindrome or not
    // put letters of word into stack
    for(var i = 0; i < word.length; i++){
        letters.push(word[i])
    }
    
    //pop the array and one by one store in rwords
    for(var i = 0; i < word.length; i++){
        rwords += letters.pop()
    }
    
    
    if(rwords === word ){
        console.log("It is palindrome")
    }else{
        console.log("It is not palindrome")
    }
}

stack('racecar')
