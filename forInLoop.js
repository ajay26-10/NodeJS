const person={name:"Sarah",age:"30",city:"New York"};
for (let property in person){                       //property in person is name,age,city
    console.log(property,":", person[property]);    //print each property
}