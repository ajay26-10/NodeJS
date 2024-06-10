let time=1321;
if(time>0 && time<=600){
    console.log("Early Morning");
}
else if(time>600 && time<=780){
    console.log("Morning");
}
else if(time>780 && time<=960){
    console.log("Noon");
}
else if(time>960 && time<= 1140){
    console.log("Afternooon");
}
else if(time>1140 && time<= 1320){
    console.log("Evening");
}
else if(time>1320 && time<= 1439){
    console.log("Night");
}
else{
    console.log("Invalid Time");
}