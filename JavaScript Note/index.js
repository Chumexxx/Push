// HELLO WORLD

//console.log("hello Philz");

// var fashola = "Mascot";

// let sail = "Mascot"

// const erasmus = "Mascot"


// var car = 56

// console.log(fashola);
// console.log(sail);
// console.log(erasmus);
// console.log(car);

// const student = {
//     name: "shade",
//     age: 22,
//     adminNo: 28384984,
//     bio: "I am a good girl",
//     isAdmitted: true,

//     book: {
//         math: "New Gen Maths",
//         eng: "Good bye to failure",
//         biology: "Essential biology",
//     }
// }

// console.log(student);


//SOME JAVASCRIPT METHODS
// let students = "david, onuwukwe, chimobi"
// let b = students.split(",")

// let participants = "Fatimah"
// let c = participants.slice(1,4)

// console.log(b)
// console.log(c)


//JAVASCRIPT ARRAYS
//Numeric Array []

//Associate Array {} Object Literal, Objects
//Numeric Array

//let participants = ["Igbo", "David", "Samuel", "Damean", 3, true]
//console.log(participants[2])

//Associative Array
// let human = {
//     numberOne: "Igbo",
//     numberTwo: "Ezinne",
//     numberThree: "Aminat"
// }

// console.log(human.numberThree)

// let human = {
//     munOne: "James",
//     numThree: [1, "Samuel", false]
// }

// console.log(human.numThree[1])

//Array Methods
//.push()
//.pop()
//.shift()
//.unshift()
//.splice(1,1,10)
//.splice()
//.filter()


//SOME ARRAY METHODS EXAMPLE
//let arr1 = [10, 20, 30, 40, 50, 60, 70]

// arr1.pop();

// console.log(arr1)

// arr1.push(6)
// console.log(arr1)

// arr1.shift()
// console.log(arr1)

// arr1.unshift(0)
// console.log(arr1)

// arr1.splice(0, 3)
// console.log(arr1)

// arr1.forEach((x)=>{
//     console.log(x*3)
// })

// let arrNew = arr1.map((i) => {
//     return i*3
// })
// console.log(arrNew)

// let a = arr1.filter((i) => {
//     return i > 10
// }) 
// console.log(a)


//GETTING USER INPUTS
// let a = window.prompt("Enter a value for a: ");
// let b = window.prompt("Enter a value for b: ");

// a = parseInt(a)
// b = parseInt(b)
// let c = a + b
 
//Method to change number to string
//.toString

// console.log(c)

//Alternative method to change string to number
// let radius = "4"
// radius = Number(radius)
// String()

// console.log(typeof radius)


//CLASSWORK
// let radius = Number("4");
// let constant = Math.PI;
// console.log(constant)
// const radii = radius ** 2;
// console.log(radii)

// console.log(constant*radii)


//CLASSWORK
// let a = parseInt(window.prompt("Enter number 1: "))
// let b = parseInt(window.prompt("Enter number 2: "))
// let c = parseInt(window.prompt("Enter number 3: "))
// let d = parseInt(window.prompt("Enter number 4: "))

// let average = (a + b + c + d)/4

// console.log("The average is: " + Math.ceil(average))


//TYPE INFERENCE
// let a = 5
// let b = "5"
// console.log(b + a)


//Comparison operators
//=
//==
//===
//<
//>
//!=
//<=
//>=

//console.log(0.1 + 0.2 === 0.3);

//and = &&

//or = ||

//not = !

//Unary Operator = -- or ++

//Tunary Operator
//This operator checks for a condition and sets a response
//? true : false

//console.log(2 == 2 ? "this is correct" : "This is wrong")


//CLASSWORK
//Write a program that tells a user if a number is positive or negative
//write a program to tell if a number is even or odd

// let a = parseInt(prompt("Enter a number"))

// alert( a < 0 ? "This is a negative number" : "This is a positive number")

// let a = parseInt(prompt("Enter a number"))

// alert (a % 2 != 0 ? "This is an odd number" : "This is an even number")

// let a = parseInt(prompt("Enter Number 1"))
// let b = parseInt(prompt("Enter number 2"))

// alert(
// a < b ? `${b} is the highest number` : `${a} is the highest number`
// )

// let a = parseInt(prompt("Enter Number 1"))
// let b = parseInt(prompt("Enter Number 2"))
// let c = parseInt(prompt("Enter Number 3"))

// alert(
// a < b && c ? `${a} is the highest number` : `${b} is the highest number`
// )



//FILTER AND REDUCE - WORKING WITH ARRAY OF OBJECTS

// let jumia = [
//     {name: "Powerbank", price: 8000, category: "Gadget", quantity: 0},
//     {name: "Phone", price: 125000, category: "Gadget", quantity: 0},
//     {name: "Nivea", price: 5000, category: "Skincare", quantity: 0},
//     {name: "PenDrive", price: 3000, category: "Gadget", quantity: 0},
//     {name: "PenDrive", price: 3000, category: "Gadget", quantity: 0},
//     {name: "PenDrive", price: 3000, category: "Gadget", quantity: 0}
// ]

//Filter - to filter through an array or array of objects
// let a = jumia.filter((gadget)=>{
//     return gadget.category == "Gadget"
// })

// console.log(a)

//Reduce
// let a = jumia.reduce((accumulator, prices) => {
//     return accumulator + prices.price
// }, 0)

// console.log(a)

// let a = jumia.reduce((totalSum, itemPrice) => {
//     return totalSum + itemPrice.price
// }, 0)

// console.log(a)

// let shippingFee = 1500

// let finalTotal = a + shippingFee
// console.log(finalTotal)


//IF, WHILE AND FOR LOOPS
//IF
// if (5 < 10)
// {
//     console.log("5 is greater than 10");
// }

//IF, ELSE
// if (5 < 10)
// {
//     console.log("5 is greater than 10");
// }
// else
// {
//     console.log("Na Lie");
// }

//IF, ELSE IF, ELSE
// if (10 > 20)
// {
//     console.log("Tamo is the way")
// }
// else if ( 10 == 20)
// {
//     console.log("We move")
// }
// else
// {
//     console.log("E no work ooh")
// }


//CLASSWORK
// let a = Number(prompt("Enter the first number"))
// let b = Number(prompt("Enter the second number"))
// let c = Number(prompt("Enter the third number"))
// let d = Number(prompt("Enter the fourth number"))

// if (a || b || c < d){
//     alert(`${d} is the highest number`)
// }
// else if (a || b || d < c){
//     alert(`${c} is the highest number`)
// }
// else if (a || d || c < b){
//     alert(`${b} is the highest number`)
// }
// else if (b || d || c < a){
//     alert(`${a} is the highest number`)
// }
// // else if( a == b && a == c && a == d)
// else{
//     alert("Invalid input")
// }


//CLASSWORK
// let age = Number(prompt("How old are you?"));

// if ( age <= 0) 
// {
//     alert("Enter a number greater than 0");
// }
// else if (age <= 12) 
// {
//     alert("You will pay $5");
// } 
// else if (age <= 18) 
// {
//     alert("You will pay $10");
// } 
// else if (age <= 60) 
// {
//     alert("You will pay $20");
// } 
// else if (age > 60) 
// {
//     alert("You will pay $15");
// } 
// else 
// {
//     alert("You have entered an invalid value");
// }




//CLASSWORK
// let score = Number(prompt("Enter your score"));

// if (score >= 70 && score <= 100) 
// {
//     alert("Congratulations! Your grade is A");
// } 
// else if (score >= 60 && score <= 69) 
// {
//     alert("Congratulations! Your grade is B");
// } 
// else if (score >= 50 && score <= 59) 
// {
//     alert("Congratulations! Your grade is C");
// } 
// else if (score >= 40 && score <= 49) 
// {
//     alert("Your grade is D. You tried");
// } 
// else if (score >= 35 && score <= 39) 
// {
//     alert("Your grade is E. You performed fairly");
// } 
// else if (score >= 0 && score <= 34) 
// {
//     alert("You failed");
// } 
// else if (score < 0) 
// {
//     alert("Your score must be a number higher than 0");
// } 
// else 
// {
//     alert("Enter a valid number");
// }


//CLASSWORK
// let weight = Number(prompt("Enter your weight"))
// let height = Number(prompt("Enter your height"))

// let bmi = weight / (height * height);

// if (weight <= 0 || height <= 0) 
// {
//     alert("Please enter valid positive numbers for weight and height.");
// } 
// else
// {
//     if (bmi < 18.5) 
//     {
//         alert(`Your BMI score is ${bmi.toFixed(2)} and your category is Underweight`)
//     } 
//     else if (bmi >= 18.5 && bmi <= 24.9) 
//     {
//         alert(`Your BMI score is ${bmi.toFixed(2)} and your category is Normal`)
//     } 
//     else if (bmi >= 25 && bmi <= 29.9) 
//     {
//         alert(`Your BMI score is ${bmi.toFixed(2)} and your category is Overweight`)
//     } 
//     else if (bmi >= 30) 
//         {
//             alert(`Your BMI score is ${bmi.toFixed(2)} and your category is Obessed`);
//     } else 
//     {
//         category = "Invalid BMI";
//     }

//     // alert(`Your BMI is ${bmi.toFixed(2)}, which is categorized as ${category}.`);
// }



//FOR LOOP
// for (let i = 1; i <= 100; i++){
//     console.log(i);
// }

// for (let j = 2; j <= 12; j++){
//     console.log(`2 x ${j} = ${2*j}`);
// }

// for (let j = 1; j <= 12; j++)
// {
//     console.log('\n', j);
//     for (let k = 1; k <= 20; k++)
//     {
//         console.log(j*k);
//     }      
// }


//WHILE LOOP
// let i = 1
// while (i <= 10){
//     console.log(i)
//     i++
// }

// if(i = 10)
// {
//     console.log(`${i} is the last number`)
// }


//FUNCTION
// function man()
// {
//     console.log('I smoke garri today')
// }

// man()

// eat()
// //Function Declaration
// function eat()
// {
//     console.log("I want to eat garri")
// }

// //Function Expression
// let drink = function()
// {
//     console.log("I want to drink garri")
// }

// drink()

//Dynamic Function
// function print(name){
//     console.log(name)
// }

// print(`Joshua`)
// print(`Joshua is a Software Engineer`)

// function print(name, address, age){
//     console.log(`My name is ${name}, I stay at ${address}, and I amd ${10} years old`)
// }

// print("Chukwuemeka", "SAIL Avenue", 10)

// function addNumbers(num1, num2){
//     let total = num1 + num2
//     return total
// }

// console.log(addNumbers(10, 20))

// function divide(num1, num2){
//     let total = num1 / num2
//     console.log(total)
// }

// divide(10, 5)

// function multiply(num1, num2, num3, num4){
//     let total = num1 * num2 * num3 * num4
//     console.log(total)
// }

// multiply(10, 12, 14, 16)
// let div = (num2, num3) => {
//     let answer = num2 + num3
//     return answer
// }

// let arrayTOSquare = () => {
//     let array = []
//     let answer = array.forEach((x)=>{
//             answer**
        
//     console.log(answer)
//     )}

// arrayTOSquare(10, 14, 26)


// let arrayToSquare = ([num1, num2, num3]) => {
//     squared = [num1, num2, num3]
//     total = squared.forEach((x)=>{
//         console.log(x*x)
//     })
// }

// arrayToSquare([2, 3, 4])



//(Document Object Model) DOM MANIPULATION
//Get element by title
//Get element by id
//Get element by classname
//Get element by queryselector


// console.log(document)
// console.dir(document)

// document.title = "My Page"
//let body = document.body
//body.style.backgroundColor = "hotpink"

//selecting by Id
// let a = document.getElementById("text")
// a.textContent = "No do remote work" 

//selecting by className
// let a = document.getElementsByClassName("text")[0]
// a.textContent = "Do it joor"

//selecting by tag name
// let a = document.getElementsByTagName("h1")[0]
// a.textContent = "It is all coming together"

//selecting by query selector
// let a = document.querySelector("#oruko")
// let b = a.value

// let a = document.getElementById("oruko")
// let b = document.getElementsByClassName("text")

// let c = a.value
// b.innerHTML = `<h1>${c}</h1>`

//ASYNCHRONOUS JAVASCRIPT
//There ate 3 ways to write an asynchronous function. CallbackFunction, Promise and Async.
// A function that takes in another function as a parameter is a callback function
//Promise - this is a better way to write asynchronous code

//PROMISE
// function orderFood(foodType){

//     return new Promise((resolve, reject) => {
//         if (foodType == "pizza")
//         {
//             resolve("Pizza pepperoni")
//         }
//         else if (foodType != "pizza")
//         {
//             reject("your order has been cancelled")
//         }           
//     })
// }


// orderFood("pizddza")
//     .then(function(data){
//     console.log(data)
// })

//     .catch((data) => {
//         console.log(data)
//     })

//ASYNC



//FETCH API
// fetch("https://jsonplaceholder.typicode.com/users").then((data) => data.json()).then(data => console.log(data)
// ).catch(error => console.log("An error occured", error)
// )

// const getData = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")

//     const data = await response.json()
//     return data
// }

// getData.then((myData) => {console.log(myData)

// })

//JavaScript Classes
//Classes are used to define properties of anything. While methods are used to define the purpose. The format is below.
// class Person{

// }

//The classes will have constructors which will be used to define it's properties. Class will follow a perticular objects from the constructors.
// class Person{
//     constructor(){
//         this.height = "5Ft"
//         this.weight = '50kg'
//         this.color = "chocolate and caramel"
//     }   
// }

//let person1 = new Person()

//A class can also be dynamic
// class Person{
//     constructor(height, weight, colour){
//         this.height = height
//         this.weight = weight
//         this.color = colour
//     }   
// }

//Further rxamples
// let person = new Person ("10ft", "200kg", "Yellow")
// console.log(person)

//You can create a function inside your class
// class Person{
//     constructor(height, weight, colour){
//         this.height = height
//         this.weight = weight
//         this.color = colour
//     } 
    
//     dreamWife(){
//         console.log(`she must be ${this.height} , ${this.weight} , and ${this.color}`)
//     }
// }

// let Person1 = new Person("5ft", "yellow", "30kg")
// Person1.dreamWife()

// class Rectangle{
//     constructor(width, height){
//         this.height = height
//         this.width = width
//     }

//     Rec(){
//         console.log(`The height of the rectangle is ${this.height} and width is ${this.width}`)
//         let width = this.width
//         let height = this.height
//         let area = width * height
//         let perimeter = 2*(length + height)

//         console.log(`The area is ${area} and the perimeter is ${perimeter}`)
//     }
// }

// let Rectangle1 = new Rectangle("10", "5")
// Rectangle1.Rec()

// let Rectangle2 = new Rectangle("8", "30")
// Rectangle2.Rec()

// let Rectangle3 = new Rectangle("0.5", "2")
// Rectangle3.Rec()

// class Rectangle{
//     constructor(height, width){
//         this.height = height
//         this.width = width
//     }

//     area(){
//         let area = this.height * this.width
//         return area
//     }

//     perimeter(){
//         let perimeter = 2(this.height + this.width)
//         return perimeter
//     }
// }

// let rec1 = new Rectangle (10, 5)
// let rec2 = new Rectangle (8, 30)
// let rec3 = new Rectangle(0.6, 2)

// console.log(rec1.area())

//Class Inheritance 
// class Parent{
//     constructor(land, money, business){
//         this.plot = land,
//         this.bar = money,
//         this.investment = business
//     }

//     talk(){
//         console.log("This is the time")
//     }
// }

// class Childern extends Parent{
//     constructor(land, money, business){
//         super(land, money, business)
//     }
// }

// console.log(new Childern())

// const father = new Parent()
// father.talk()


//Destructuring Arrays
//Spread operators
let myArray = [22, 73, 56, 78, 97, 33]

let [a, b, ...d] = myArray
console.log(a, b)
console.log(d)

//Destructuring Objects
//Spread Operators
let myObj = {
    name: "Yes",
    request: "No",
    bio: "yes, yes"
}

let {name:main = "User", bio, ...r} = myObj
console.log(main, bio);
console.log(r)