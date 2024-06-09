let item = new Map();

item.set(1,'it1');
item.set(2,'it2');
item.set(3,'it3');
item.set(4,'it4');
item.set(5,'it5');

function dispItem(map){
    let itemlist=document.getElementById("itemList");
    itemlist.innerHTML='';      //clear existing items
    map.forEach((item,num)=>{
        let listItem= document.createElement('li');
        listItem.textContent=(`${num}:${item}`);
        itemlist.appendChild(listItem);
    });
}

function addItem(key,value){
    item.set(key,value);
    dispItem(item);
}

// handle form submission
document.getElementById("addItemForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    let key = document.getElementById("itemKey").value;
    let value = document.getElementById("itemVal").value;
    addItem(key,value);
    document.getElementById("addItemForm").reset();
});

//display on loading the page
window.onload=()=>{
    dispItem(item);
}