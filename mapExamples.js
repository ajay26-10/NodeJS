let amap = new Map()

amap.set('name','john')
amap.set('age',30)
amap.set('address','NY')
amap.forEach((value,key)=>{
    console.log(`${key}:${value}`)
});

console.log(`****************`);

let newMap = new Map([['color','black'],['size','xxlarge'],['shape','square']])
//iterate using for Of loop
for(let [key,value] of newMap){
    console.log(`${key}:${value}`);
}

console.log(`****************`);

//iterate using for Each
newMap.forEach((value,key)=>{
    console.log(`${key}:${value}`)
});

console.log(`****************`);

let mapArray = Array.from(newMap);
console.log(mapArray);

console.log(`****************`);

