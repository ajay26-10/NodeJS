const cart= new Map()

cart.set("Milk",1);
cart.set("Bread",2);
cart.set("Rice",5);

let totalCost=0;

const price=    {"Milk":30, "Bread":40, "Rice":60};
console.log(`Item\tQuantity\tPrice\tTotal`);

cart.forEach((quant,item)=>{
    let cost=quant*price[item];
    console.log(`${item}\t${quant}\t\t${price[item]}\t${quant*price[item]}`);
    totalCost+=cost;
});

console.log(totalCost);