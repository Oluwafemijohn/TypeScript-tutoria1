const firstName = "Oluwafemi";
const lastName = "Ogundipe";

let age = 23;

// TypeScript wiil not allow this
// age = "d"

console.log(firstName);
console.log(lastName);

function displayName(name: string){
    let myName:string;
    myName = "John";

    console.log(name);
    console.log(myName);

    //@ts-ignore
    myName = 89;
}

const displayName2 = () => {
    console.log("aifafkafaf");
}

const calculate = (firstNum:number, secondNum:number) => {
    const sum = firstNum + secondNum;
    const divide = firstNum + secondNum;
    const modulos = firstNum % secondNum;
    return {
        sum: sum,
        divide: divide,
        modulos:modulos
    }
}

const calculate2 = (firstNum:number, secondNum:number) => {
    const sum = firstNum + secondNum;
    const divide = firstNum + secondNum;
    const modulos = firstNum % secondNum;
    return {
        sum,
        divide,
        modulos
    }
}

displayName("femi");

console.log(calculate(4,2));
console.log(calculate2(4,2));

// Object letera
const obj = {fName: "fshjfhs", lName: "faiaad"};
//object using the constructor
const obj2 = new Object({fName: "femi", lName: "Ogun"});

// the extra aspect of tyscript is Interface

interface Icircle{
    radius: number;
    rad: string
}

const calculateRadius = (data:Icircle) => {
    const{ radius, rad } = data;
    const perimeter = 2*3.142*radius;
    const area = 3.142*(radius*radius);
    return { perimeter , area};
}

// You can not pass ordinary parameter, iinstead you pass object
const result = calculateRadius({radius:5, rad:"Femi"})
console.log(result)

interface Person{
    firstName2:string,
    lastName2:string,
    age:number,
    address:string
}

let person:Person;

// const getPerson = () => {

// }