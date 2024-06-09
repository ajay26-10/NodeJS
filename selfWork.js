const shoppingCart = new Map()

shoppingCart.set("Apple",1);
shoppingCart.set("Orange",2);
shoppingCart.set("Banana",2);
shoppingCart.set("Kiwi",0.5);
shoppingCart.set("Pear",0.5);

let totalCost=0;
let x="chakka"

const prices = {"Apple":100, "Orange":125, "Banana":50, "Kiwi":250, "Pear":200}

console.log(`Item\tQuantity\tPrice\tTotal`);
if(shoppingCart.has(x)){
    shoppingCart.set(x,2);}
else{
    console.log(`${x} Not Found`);
}
shoppingCart.forEach((quantity,item)=>{
    let cost=quantity*prices[item];
    
    console.log(`${item}\t${quantity}\t\t${prices[item]}\t${quantity*prices[item]}`);
    totalCost+=cost;
});
console.log(`Total Amount: ${totalCost}`);


if(totalCost>750){
    totalCost*=0.75;
    console.log(`After Discount : ${totalCost}`);
}
else{
    console.log(`Payable : ${totalCost}`);
}