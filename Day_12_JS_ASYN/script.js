// console.log("Starting");

// function temp() {
//     console.log("Temp");
// }

// function handleClick() {
//     for(let i=0; i<100000; i++) {
//         for(let j=0; j<100000; j++) {
//     console.log("Clicked");
// }
// }
// console.log("...");
// document.getElementById("display").innerText ="done";
// temp();
// console.log("ended");

// function cb() {
//     console.log("completed");
// }
// const time= 1000; // milliseconds
// setTimeout(cb,time); // milli second

// function cbE() {
// const p = document.getElementById("display");
// p.innerText ="done";
// }

// const p = document.getElementById('btn');
// const type="click";
// p.addEventListener(type, cbE);

// event loop using set timer

// console.log("start");
// function temp() {
//     console.log("Temp");
// }
// setTimeout(temp,1000);

// console.log("end");

const arr =["a","b","c","d","e","f","g"];
    // for (let i=0; i<arr.length; i++) {
    //     cpnsole.log(arr[i],i);
    // }

// const cbE = (elem,indx) =>
// {
//     console.log(elem,indx);
// }

// arr.forEach(cbE);

// const cbE = (elem,indx) =>
    // {
    //     console.log(elem,indx);
    // }
    
//     arr.forEach((ele,indx) => {
//         console.log(ele,indx);
// });


//-- 

// const url = "https://api.github.com/users/likbalpande";
// const options = {};
// const pr = fetch(url, options);

// pr.then(successCB).catch(errorCB);

// function successCB(response) {
//     console.log("Success", response);
// }
// function errorCB(response) {
//     console.log("error-->", errorCB);
// }


const url = "https://api.github.com/users/likbalpande";

const pr = fetch(url);

pr.then("success -->",res){
    console.log("Success-->", res);
    const pr2 =  res.json();        
    pr2.then(print);
}
const pr2 =  res.json();        
pr2.then()

function print(data){
    console.log("final data-->", data);

}