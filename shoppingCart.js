let cart= new Map();
cart.set("Apple",2);
cart.set("Cookie",3);
cart.set("Juice",1);

const price={"Apple":50,"Cookie":20, "Juice":30}
let totalCost=0;

cart.forEach((quantity,item)=>{
    const itemPrice=price[item];
    const itemTotal=itemPrice*quantity;
    totalCost +=itemTotal;
});
console.log("Total Cost= Rs."+totalCost);