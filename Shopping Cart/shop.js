let grocery = new Map();
grocery.set(1,"Apple");
grocery.set(2,"Milk");
grocery.set(3,"Bread");
grocery.set(4,"Juice");
grocery.set(5,"Watermelon");



function displayCart(map){
    let finalCart=document.getElementById("itemList");
    finalCart.innerHTML='';      //clear existing items
    map.forEach((item,num)=>{
        let listItem= document.createElement('li');
        listItem.textContent=(`${num}:${item}`);
        finalCart.appendChild(listItem);
    });
}

function addItem(key,value){
    grocery.set(key,value);
    displayCart(grocery);
}

document.getElementById"(addItemForm)".addEventListener("submit",(e)=>{
    e.preventDefault();
    let key = document.getElementById("itemKey").value;
    let value = document.getElementById("itemVal").value;
    addItem(key,value);
    document.getElementById("addItemForm").reset();
});

//display on loading the page
window.onload=()=>{
    dispItem(grocery);
}

