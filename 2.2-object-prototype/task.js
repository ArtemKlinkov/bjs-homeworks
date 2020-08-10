//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function isPalindrome() {
    const strRemovedWhiteSpaces = this.replace(/\s/g, "").toLowerCase();
    const reverseArr = strRemovedWhiteSpaces.split("").reverse();
    const reverseStr = reverseArr.join("");
    return strRemovedWhiteSpaces === reverseStr;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let marksSum = 0;   
    
    if (marks.length == 0) {
        return 0;
    }
    for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];
    }

    return Math.round(marksSum / marks.length);
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    const now = Date.now();
    const parsedBirthday = +new Date(birthday);
    const diff = now - birthday;
    const age = diff / (100 * 60 * 60 * 24 * 365);
    debugger;
    
    return age >= 18;
}