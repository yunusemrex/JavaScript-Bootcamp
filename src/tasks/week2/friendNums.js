function friendNumbers(number1,number2) {
    let total1 = 1
    let total2 = 1
    let bigNumber
    let i = 2

    if(number1 > number2){
        bigNumber = number1
    }
    else
    bigNumber=number2

    while(i <= bigNumber / 2){
        if(number1 % i == 0){
            total1=total1+i
        }
        if(number2 % i == 0){
            total2 = total2  +i
        }
        i++
    }

    if(number1 == total2 && number2 == total1){
        console.log(number1 , number2 + " are friend numbers")
    }

    else
    console.log(number1 , number2 + " aren't friend numbers.")


}

friendNumbers(220,284)
friendNumbers(920,980)
