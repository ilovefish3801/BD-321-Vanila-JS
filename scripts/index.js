// let nameUser, age, surname;

// nameUser = "John";
// age = 21.5;
// surname = "Doe";
// let text = "test Test test"
// const PI = 3.14

// text methods
// console.log(nameUser.toUpperCase())
// console.log(nameUser)
// console.log(nameUser.toLowerCase())
// console.log(nameUser.length)

// text = text.replaceAll(" ", "")
// console.log(text)
// console.log(text[0]);
// check capitalize
// console.log(text.)

// let result = 56 > 3;
// console.log(result);

// // Array
// let temp_arr = [1, "test", 2, "TEST"]
// console.log(temp_arr.length)
// // add element
// temp_arr.push("New Element!")
// temp_arr.unshift("NEL")
// console.log(temp_arr)
// // delete element
// temp_arr.pop()
// temp_arr.shift()
// console.log(temp_arr)
// // delete element by index
// let r = temp_arr.splice(2, 2)
// console.log(r)
// // delete element by content
// let index = temp_arr.indexOf('test')
// temp_arr.splice(index, 1)
// console.log(temp_arr)

// let fruits_arr = ['apple', "pineapple", "banana"]
// // for each elements
// fruits_arr.forEach((fruit, index)=>{
//     console.log(fruit, index)
// })
// // maping elements
// fruits_arr.map((fruit, index)=>{
//     console.log(fruit, index)
// })
// // full filter
// let filteredFruits = fruits_arr.filter((fruit)=>{
//     if(fruit == "banana"){
//         return fruit
//     }
// })
// console.log(filteredFruits)
// // short filter
// filteredFruits = fruits_arr.filter(fruit => fruit == "apple")
// console.log(filteredFruits)

// // sort desc
// let numberArr = [1, 5, 2, 6]
// numberArr.sort((a, b)=>{
//     return b - a
// })

// // sort abc
// numberArr.sort((a, b)=>{
//     return a - b
// })

// console.log(numberArr)


// Object
let tempUser = {
    name: "John",
    surname: "Doe",
    age: 21,
    address: [],
    family:{
        son: {
            name: "Jack",
            age: 1
        }
    }
}

console.log(tempUser.name)

// add new element 
tempUser.salary = 3000
console.log(tempUser)

// destruct object
const {name, surname, address} = tempUser;
console.log(surname)

delete tempUser.age

console.log(tempUser)

// Functions

// Listeners



