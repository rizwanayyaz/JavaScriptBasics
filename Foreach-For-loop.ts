function findRottenEgg(arrOfEggs:string[]):any{
  
    var result:number = 0;
  
    for(let i = 0; i < arrOfEggs.length; i++){
      console.log("For Loop",i)
      if(arrOfEggs[i] !== 'egg'){
        
         result = i;
         break;
      }
      
    }
    console.log("Result After For Loop",result)
     arrOfEggs.forEach((item,index) => {
       console.log("For Each",index)
       if(item !== 'egg'){
         console.log("This is rotten egg",item)
         result = index;
        
       }
    })
    return result
  }
  
  var arrOfEggs:string[] = ["egg","egg","egg","egg","rottenEgg","egg","egg","egg","egg"]
  findRottenEgg(arrOfEggs)