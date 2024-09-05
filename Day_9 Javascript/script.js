// const username = "Pranshi";
// const greeting = "Hello";
// // const template = '${greeting} ${username}';
// const template = `${greeting} ${username}`;
// console.log(template);

// // const username = "Pranshi";
// // const greeting = "Hello";
// // const template = `${greeting} ${username}`;
// // console.log(template); // Output: Hello Pranshi


// function printName(str) {
//     console.log("*****",str);
// }

// //function calling
// printName();

// function printName(str="#") {
//     console.log("*****",str);
// }

// //function calling
// printName();

// function printName(str) {
//     console.log("*****",str);
// }

// //function calling
// printName("Pranshi");


// default and  return
// function sum(a, b, c) {
//     let result = a + b + c;
//     let result1 = a + b;
//     return result, result1;
  
    
// }

// //function calling
// const ans= sum(10,20,30);
// const ans1= sum(10,20);
// console.log(ans);
// console.log(ans1);

// function sum(a, b, c) {
//     let result = a + b + c;
//     let result1 = a + b;
//     return { result, result1 };
// }

// // Function calling
// const ans = sum(10, 20, 30);
// const ans1 = sum(10, 20);
// console.log(ans.result);  // Output: 60
// console.log(ans.result1); // Output: 30
// console.log(ans1.result); // Output: NaN (since c is undefined, result is NaN)
// console.log(ans1.result1); // Output: 30

// function abc() {
//     console.log("Inside abc function");
// }
// abc();
// function assignment
// const temp= function abc() {
//        console.log("Inside abc function");
//      }
//    // abc(); // give error message
//     temp();

// annonymous function assignment
// const temp= function() {
//     console.log("Inside abc function");
//       }

//       temp();
// arrow function

// const temp = ()=> {
//     console.log("Inside abc function");
//       }

//       temp();

// if(1==2){
//     if(1==3){
//         console.log("Hello");

//     }
//     else{
//         console.log("Hi");
//     }
// }

// switch
// let age=10;
// switch(age){
//     case 9:
//         console.log("You are 10 years old");
//         break;
//     case 10:
//         console.log("You are 11 years old");
//         break;
//     default:
//         console.log("You are not 10 or 11 years old");
// }

// if(null==undefined){
//     console.log("Hello");
// }
// else {
//     console.log("hi");
// }

// const sum=(a,b,c)=> {
//     if(c){
//         console.log("sum of two num is",a+b);
//     } else {
//         console.log("sum of two num is",a+b);
//     }
// }


// objects
// const students = {
//     Key: "value",
//     name: "username",
//     21: "DOB",
// };
// // const std = new bject();
// console.log(students);
// // console.log(std)
// console.log(students[21]);

// ACCESS PROPERTY DYNAMICALLY
// let key = "name";
// const student =
// {
//     Branch: "CSE",
//     city: "Delhi",
//     name: "rohit",
//     21: "DOB",  
// };
// console.log(student[key]);

// change properties (dynamically)
// const k ="hello world";
// const students = {
//     branch: "CSE",
//     City: "Delhi",
//     name: "rohit",
//     21: "DOB",  
// };

// students[k]= "hello world";
// students.address ="ABES";
// console.log(students);
// delete students.name;
// console.log(students);

// const arr=["hello","new","world"];
// console.log(arr[0]);
// console.log(arr[2]);

// const arr= ["hello","world","city","Pranshi"];
// arr[0] = 123;
// arr[3] ="name";
// //arr[10] = "city new";
// arr.push("city new");
// console.log(arr);

//.... delete is also risky
// const arr= ["hello","world","city","Pranshi"];
// delete arr[0];
// console.log(arr);


// const arr= ["hello","world","city","Pranshi"];
// console.log(arr);
// console.log(arr.length);
// console.log(arr.toString());


// for loo[]
// const arr = [10,20,30,40,50];
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// for(let i in arr) // in print index
// {
//     console.log(i);
// }
// for(let i of arr)
// {
//     console.log(i); // of print values
// }


// Array of student objects
const students = [
    { index: 1, name: "Ajay", city: "Delhi", cgpa: 9.0 },
    { index: 2, name: "Mohit", city: "Bhopal", cgpa: 8.6 },
    { index: 3, name: "Sumit", city: "Mumbai", cgpa: 8.6 },
    { index: 4, name: "Aman", city: "Agra", cgpa: 8.2 }
];

// Loop through the list of students
for (let i = 0; i < students.length; i++) {
    // Check if the student is from Mumbai and has a CGPA greater than 8.5
    if (students[i].city === "Mumbai" && students[i].cgpa > 8.5) {
        console.log(`Name: ${students[i].name}, City: ${students[i].city}, CGPA: ${students[i].cgpa}`);
    }
}

// Output expected: (No output because no student meets the criteria)
