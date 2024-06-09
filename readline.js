const { stdin } = require('process');
const readline = require('readline');

const rl=readline.Interface({
    input:process.stdin,
    output:process.stdout
});

function askName(){
    rl.question("What is your name? ", function(name){
        console.log(`Hello ${name}!`);
        askFavoriteLanguage();
    });
}

function askFavoriteLanguage(){
    rl.question("What is your favorite language? ",function(language){
        console.log(`${language} is a great choice!`);
        rl.close();
    });
}
console.log(`Welcome to Simple Line Command Interface`);
askName();
