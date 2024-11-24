// 1-rasm
// 1-.
function fillArray(arr, count) {
    if (count === 0) return arr;
    let num = parseInt(prompt("Son kiriting:"));
    arr.push(num);
    return fillArray(arr, count - 1);
}

function findMax(arr) {
    return Math.max(...arr);
}

let numbers = fillArray([], 5);
console.log("Kiritilgan array:", numbers);
console.log("Eng katta son:", findMax(numbers));
// 2-.
const arr5 = [5, 6, true, null, 8];
const arr6 = [0, 2, 5, false, 6];

const combinedArray = [...arr5, ...arr6];
const sum = combinedArray.reduce((total, item) => (typeof item === "number" ? total + item : total), 0);
console.log("Yig'indi:", sum);
// 3-.
let arr7 = [5, 4, 3, 6, 3, 7, 1];
let minIndex = arr7.indexOf(Math.min(...arr7));
console.log("Eng kichik son indeksi:", minIndex);
// 4-.
let arr1 = [5, 4, 3, 6, 3, 7, 1];
let arr2 = [22, 12, 43, 34, 55, 67, 11, 32];

let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
console.log("Birlashtirilgan va tartiblangan array:", mergedArray);
// 5-.
let carsArr = [
    { name: "Lasetti", price: 9000 },
    { name: "Damas", price: 7800 },
    { name: "Cobalt", price: 12500 },
    { name: "Gentra", price: 14000 },
    { name: "Onix", price: 1700 }
];

console.log("Name bo'yicha tartiblangan:", carsArr.sort((a, b) => a.name.localeCompare(b.name)));

console.log("Price bo'yicha tartiblangan:", carsArr.sort((a, b) => a.price - b.price));
// 6-.
let arr = ["Salom", "Rahmat"];
arr.splice(1, 0, "Qanday", "Ishlar");
console.log("Yangilangan array:", arr);
// 7-.
function reverseAndCheck(input) {
    if (typeof input === "string") {
        return input.split("").reverse().join("");
    } else if (typeof input === "number" && input > 9) {
        return parseInt(input.toString().split("").reverse().join(""));
    }
    return input;
}

console.log(reverseAndCheck("Hello"));
console.log(reverseAndCheck(12345));





// 2-rasm
// 1-.
const employees = [
    { id: 1, name: "Ali", age: 30, salary: 2000 },
    { id: 2, name: "Vali", age: 25, salary: 1800 },
    { id: 3, name: "Salim", age: 35, salary: 2500 }
];

function calculateTotalSalaries(employees) {
    return employees.reduce((total, emp) => total + emp.salary, 0);
}

console.log("Jami oylik:", calculateTotalSalaries(employees));
// 2-.
const employees1 = [
    { id: 1, name: "Ali", age: 30, salary: 2000 },
    { id: 2, name: "Vali", age: 25, salary: 1800 },
    { id: 3, name: "Salim", age: 35, salary: 2500 }
];

function findHighestSalaryEmployee(employees1) {
    if (!employees1 || employees1.length === 0) {
        return null; // Bo‘sh massiv uchun
    }

    return employees1.reduce((max, emp) => {
        return emp.salary > max.salary ? emp : max;
    });
}

let highestSalaryEmployee = findHighestSalaryEmployee(employees1);

if (highestSalaryEmployee) {
    console.log("Eng katta oylik oluvchi:", highestSalaryEmployee.name);
} else {
    console.log("Xodimlar ro'yxati bo'sh!");
}
// 3-.
const employees2 = [
    { id: 1, name: "Ali", age: 30, salary: 2000 },
    { id: 2, name: "Vali", age: 25, salary: 1800 },
    { id: 3, name: "Salim", age: 35, salary: 2500 }
];

function sortEmployeesByParam(employees2, param) {
    if (!employees || employees2.length === 0) {
        console.log("Xodimlar ro'yxati bo'sh yoki noto‘g‘ri!");
        return [];
    }

    return employees2.sort((a, b) => {
        if (a[param] === undefined || b[param] === undefined) {
            console.log(`Xato: '${param}' maydoni mavjud emas!`);
            return 0;
        }
        return a[param] > b[param] ? 1 : -1;
    });
}

console.log("Age bo‘yicha tartiblangan:", sortEmployeesByParam(employees2, "age"));
// 4-.
let arr4 = [43, 12, 76, 23, 97, 28, 11];
arr.sort((a, b) => a - b);
console.log("Tartiblangan array:", arr4);
// 5-.
let arr3 = [43, 12, 76, 23, 97, 28, 11];

if (arr3.length > 0) {
    let minVal = Math.min(...arr3);
    console.log("Minimum qiymat:", minVal);
} else {
    console.log("Xatolik: Massiv bo'sh!");
}
// 6-.
function fillArrayRecursively(size) {
    if (size === 0) return [];
    let name = prompt("Name kiriting:");
    let rest = fillArrayRecursively(size - 1);
    return [name, ...rest];
}

let names = fillArrayRecursively(3);
console.log("Kiritilgan name'lar:", names);
// 7-.
let employees3 = [
    { id: 1, name: "Ali", age: 30, salary: 5000 },
    { id: 2, name: "Vali", age: 25, salary: 4500 },
    { id: 3, name: "Sara", age: 28, salary: 4700 }
];

function findEmployeeById(employees3, id) {
    let employee = employees3.find(emp => emp.id === id);
    return employee ? employee : "Xodim topilmadi";
}

console.log("ID bo‘yicha qidiruv:", findEmployeeById(employees3, 2));
