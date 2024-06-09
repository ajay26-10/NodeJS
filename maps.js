let map = new Map();

map.set("Name","John");
map.set("Age",30);
map.set("City","NY");

map.forEach((value,key)=>{
    console.log(key+'='+value)
});