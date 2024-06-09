function riskyOps(){
    let a;
    return c.property;
}

try{
    let rsult=riskyOps();
    console.log(rsult);
}catch(error){
    console.log("An error has occured:"+error.message);
} 
finally{
    console.log("This always executes!!!!!!!!!!!!!")
}


