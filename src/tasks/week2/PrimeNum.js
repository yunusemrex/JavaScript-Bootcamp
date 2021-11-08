
function findPrimeNum(... numbers) {
    
    for (let i = 0 ; i < numbers.length; i++) {

       let isPrimeNum=true
       if(numbers[i] <= 1){
           console.log(numbers[i]+" is not a prime number")
           continue
       }

       for(let j = 2; j <= numbers[i] / 2 ; j++){

           if(numbers[i] % j == 0){
               console.log(numbers[i] + " is not a prime number.")
               isPrimeNum = false
               break
           }
       }
       if(isPrimeNum){
           console.log(numbers[i] +" is a prime number")
       } 
    }   
}

findPrimeNum(1,20,4397,63,3)
//findPrimeNum(1,2,3)
//findPrimeNum(10,5,6,8,9,25,11,12)