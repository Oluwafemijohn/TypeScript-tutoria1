var firstName = "Oluwafemi";
var lastName = "Ogundipe";
var age = 23;
// TypeScript wiil not allow this
// age = "d"
console.log(firstName);
console.log(lastName);
function displayName(name) {
    var myName;
    myName = "John";
    console.log(name);
    console.log(myName);
    //@ts-ignore
    myName = 89;
}
var displayName2 = function () {
    console.log("aifafkafaf");
};
var calculate = function (firstNum, secondNum) {
    var sum = firstNum + secondNum;
    var divide = firstNum + secondNum;
    var modulos = firstNum % secondNum;
    return {
        sum: sum,
        divide: divide,
        modulos: modulos
    };
};
var calculate2 = function (firstNum, secondNum) {
    var sum = firstNum + secondNum;
    var divide = firstNum + secondNum;
    var modulos = firstNum % secondNum;
    return {
        sum: sum,
        divide: divide,
        modulos: modulos
    };
};
displayName("femi");
console.log(calculate(4, 2));
console.log(calculate2(4, 2));
// Object letera
var obj = { fName: "fshjfhs", lName: "faiaad" };
//object using the constructor
var obj2 = new Object({ fName: "femi", lName: "Ogun" });
var calculateRadius = function (data) {
    var radius = data.radius, rad = data.rad;
    var perimeter = 2 * 3.142 * radius;
    var area = 3.142 * (radius * radius);
    return { perimeter: perimeter, area: area };
};
// You can not pass ordinary parameter, iinstead you pass object
var result = calculateRadius({ radius: 5, rad: "Femi" });
console.log(result);
var person;
// const getPerson = () => {
// }
