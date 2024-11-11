//String
// let oruko:string
// oruko = 'Benjamin'

// console.log(oruko)

//Array
// let box:string[]
// box = ["pencil,", "biro"]

//
// let lame:string = "james"
// console.log(lame)

//
// let arr1:number[] = [1,2,3,4,5,6]
// let ans = arr1.reduce((a, b)=>{
//     return a+b;
// }, 0)

// console.log(ans);

//Objects
// let obj1:{firstName:string, id:number, surName:string} = {
//     firstName: "Emaka",
//     id: 3,
//     surName: "Obasi"
// }

//Interfaces. For reusability
//You can make an interface inside an interface

// interface Person{
//     oruko:string,
//     id:number,
//     age:boolean,
//     classes: number[]
// }

// let obj2:Person = {
//     oruko: "Chukwuemeka",
//     id: 9229,
//     age: true,
//     classes: [1, 3, 4]
// }

//Tooples - this is a apecial type of array that cannot change
//Instead of any, use toople
// let igbo: [number, string, boolean] = [1, "Seun", true]

//Aliases
// type yellow = [number, string, boolean]

//Function - when you a returning something in your function, you have to specify the return type. But if you are just console.loging, no need to specify a return type.
// function calc(a:number,b:number):number {
//     return a+b
// }

//Union Types
// let value1: string|number|boolean

// value1 = 2
// value1 = "2"
// value1 = true

// let value2:(string|number)[]

//ClassWork
// let Arr1: (string|number|boolean)[] = []

// Arr1.push("hello", 18, true)
// console.log(Arr1)

//
// function addition(a:number, b:number):number{
//     return a+b
// } 

// //if you use one line, no need for return statement and return data type

// let add = (a:number, b:number) => a*b

// //otherwise
// let add1 = (a:number, b:number):number => {
//     return a*b
// }

//Union Type function
//let sub: Function

// sub = (a:number, b:number, c?:number) => {
//     console.log(a-b)
//     console.log(c)
// }

// sub(10,5)

//0 here is a default value
// sub = (a:number, b:number, c:number = 0) => {
//     console.log(a-b)
//     console.log(c)
// }

// sub(10,5)

//Object Function
// let func2 = (x:number, y:{oruko:string, age:boolean}) => {
//     return y
// }

//Type + UnionType
// type Ezikel = string|boolean
// type Stack = string|number
// type obj = {
//     name: Ezikel,
//     stack: Stack
// }

// let obj1 = (a:obj) => {
//     console.log(a)
// }

// obj1()

let text = document.querySelector("#text")! as HTMLHeadElement
text.innerHTML

console.log(text)