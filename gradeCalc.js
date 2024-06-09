let gradeMap = new Map();
gradeMap.set('John',{Math:90,Science:85,English:95});
gradeMap.set('Jane',{Math:88,Science:93,English:79});
gradeMap.set('Jim' ,{Math:69,Science:99,English:81});

function calcGrade(map){
    let avg = new Map();
    for (let [student,grade] of map){
        let total=0;
        let subject=0;
        for(let sub in grade){
            total+=grade[sub];
            subject++;
        }
        avg.set(student,(total/subject))
    }
    return avg;
}

let avgGrade= calcGrade(gradeMap);

for(let [student,grade] of avgGrade){
    console.log(`${student}:${grade}`);
}