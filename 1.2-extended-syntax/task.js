"use strict";

function getResult(a,b,c){

    let result = [];
    let D = Math.pow(b, 2) - 4 * a * c;

    if (D === 0) {
        result.push(-b / (2 * a));
    } else if (D > 0) {
        result.push((-b + Math.sqrt(D)) / 2 * a);
        result.push((-b - Math.sqrt(D)) / 2 * a);
    }

    return result;
    
}

function getAverageMark(marks){
    
    let averageMark = 0;
    let sumMarks = 0;
    if (marks.length === 0) {
        return averageMark;
    } else if (marks.length > 5) {
        console.log("Передано больше 5 оценок. Будут использованы только первые 5");
        marks = marks.slice(0, 5);
    }

    for (let mark of marks) {

        sumMarks += mark;

    }
    
    averageMark = sumMarks / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){

    let result = '';

    if (new Date().getFullYear() - dateOfBirthday.getFullYear() < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    
    return result;
}