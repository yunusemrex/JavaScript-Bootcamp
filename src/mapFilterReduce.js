let cart =  [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:3, unitPrice:10},
    {id:3, productName:"Şarj Cihazı", quantity:1, unitPrice:100},
    {id:4, productName:"Kitap", quantity:2, unitPrice:40},
    {id:5, productName:"Pot", quantity:3, unitPrice:45},
    {id:6, productName:"Kalem", quantity:4, unitPrice:25},

]

// cart.map(product=>console.log("Product Name: " + product.productName + "| Price: " + product.unitPrice))


console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : " 
    + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity, 0 )

console.log(total)


let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)



function addToCart(sepet) {
    sepet.push({id:7, productName:"Mendil", quantity:4, unitPrice:5})  //referans tip

}

addToCart(cart)
console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1   
    // console.log(number)    //değer tip
 
}

sayiTopla(sayi)
console.log(sayi)




// function addToCart2() {
//     for (let index = 0; index < cart.length; index++) {
//         const element = cart[index];
//         console.log(element)
//     }
// }

// addToCart()