function checkAge(age){
    if(age<18){
        throw new Error("You must be 18 or above! *wink wink*")
    }
    else{
        console.log("You are allowed")
    }
}

try{
    checkAge(15);
}catch(error){
    console.log("ERROR:"+error.message)
}finally{
    console.log("Thanks for visiting")
}