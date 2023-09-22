
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


// // Object
// let tempUser = {
//     name: "John",
//     surname: "Doe",
//     age: 21,
//     address: [],
//     family:{
//         son: {
//             name: "Jack",
//             age: 1
//         }
//     }
// }

// console.log(tempUser.name)

// // add new element 
// tempUser.salary = 3000
// console.log(tempUser)

// // destruct object
// const {name, surname, address} = tempUser;
// console.log(surname)
// // delete key
// delete tempUser.age

// console.log(tempUser)

// // Functions
// function testFunf(a, b){
//     return a
// }

// let anonimFunc = function(a, b){
//     alert(a+b)
//     return a
// }

// let arrorFunc = (a, b) => {

//     return a
// } 


// anonimFunc(1, 2)


// // Exeption
// try {
//     result = 1 / 1;
//     alert(result)
// } catch (e) {
//     alert(e)
// } finally{
//     alert('Final')
// }

// Loops
// let a = 0
// while(a < 5){
//     console.log(a);
//     a++;
// }

// console.log("_____", a)

// a = 6
// do{
//     console.log(a)
//     a++
// }while(a < 5)

// for(i = 0; i <= 10; i++){
//     console.log(i)
// }

// let arr = [1, 2, "p"]

// arr.map((item)=>{
//     console.log(item)
// })

// arr.forEach((item)=>{
//     console.log(item)
// })


// Conditional
// && - and, || - or
// let a = prompt("Vvedit temperaturu: ")
// if (a >= 10) {
//     alert("teplo")
// } else if (a < 10 && a > 0) {
//     alert('pomirno')
// } else {
//     alert('cholodno')
// }

// let salary = 200
// if(salary){
//     alert("Ви працюєте!")
// }else{
//     alert("Ви не працюєте")
// }

// salary >= 150 ? alert("Працюєте") : alert("Не працюєте")

// // select condition

// let a = 4;
// switch(a){
//     case 2:
//         alert("2")
//         break
//     case 4:
//     case 6:
//         alert("current")  
//         break
//     default:
//         alert("else value")          
// }


// Listeners

// start point
document.addEventListener("DOMContentLoaded", ()=>{
    console.log(null + 'a')
    // get elements
    const RED_BTN = document.querySelector("#red");
    const BODY = document.querySelector("body")
    // add listeners
    RED_BTN.addEventListener("click", (e)=>{
        e.preventDefault();
        BODY.style.backgroundColor = "#f00";
    })
})



