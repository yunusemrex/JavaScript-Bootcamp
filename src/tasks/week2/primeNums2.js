function primeNumber() {
    for(let i = 2; i < 1000 ; i++){
        let isPrimeNumber=true

        for(let j=2 ;j <i ;j++){
            if(i % j == 0)
            isPrimeNumber=false
        }
        if(isPrimeNumber)
         console.log(i)
    }
}
primeNumber()