// function printHello() {
//     printworld();
//     console.log("Hello");
// }
// function printWorld() {
//     console.log("Hello World");
// }

// console.log("start");
// print();
// printHello();
// console.log("end");


//  callbacks and higher order functions
// function printONScreen(x) {
//     console.log("-->",x);
// }
// function sum(a, b) {
//     const ans = a+b;
//     return ans;
// }

// const res = sum(10,40);
// printONScreen(res);

// console.log("start");
// function printONScreen(x) {
//     console.log("-->",x);
// }
// function sum(a, b,cb) {
//     console.log("inside sum");
//     const ans = a+b;
//     console.log("calculation done");
//     // return ans;
//     cb(ans);
//     console.log("sum function done");
// }
// const i1=10;
// const i2 = 40;
//  sum(10,40,printONScreen);
//  console.log("end");

//  console.log("start");
// function printONScreen(x) {
//     console.log("-->",x);
// }
// function sum(a, b,cb) {
//     console.log("inside sum");
//     const ans = a+b;
//     console.log("calculation done");
//     // return ans;
//     cb(ans);
//     console.log("sum function done");
// }
// const i1=10;
// const i2 = 40;
//  sum(10,40,printONScreen);
//  console.log("end");


// Itertion methods
// foreach,map,filter
//reduce

// const arr= ["green", "yellow", "orange"];
// //for(i=0;i<arr.length;i++) {...}
// function myPrint(elem,indx,arr)
// {
//     console.log(elem,indx,aee);
//  }
//  for(i=0;i<arr.length;i++) {
//     myPrint(arr[i],i,arr);
//  }

// arr.foreach(myPrint);

//return from foreach loop
const str = [2,10,14,19];
const res1 = arr.map(myprint);
console.log(res1);

 input =["ABC","CD","DE","EF","JK","HI","MN","IO"];
// OUTPUT = ["ABC","DE","EF","IO"]
 
Function cb(elem) {//-
    for(ch of elem) {
for(let ch of elem) {//+
    if(ch === 'A' || ch === 'E' || ch === 'I') {//+
        return true;
    }
}//-
}//+
return false;//+
>>>>>>> Tabnine >>>>>>>
return false;
}
const  res=input.filter(cb);
console.log(res);
