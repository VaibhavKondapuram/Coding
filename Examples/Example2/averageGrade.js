function averageGrade(){
    const myGrades = [50, 75, 100];
    let sum = 0;
    sum = myGrades[0] + myGrades[1] + myGrades[2]
    let average = sum/myGrades.length;
    return average
}

const output = averageGrade()
const newOutput = averageGrade()