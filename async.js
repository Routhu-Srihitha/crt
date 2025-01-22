// console.log(10);
// console.log(20);
// // setTimeout(()=>{
// //     console.log(30);
// // } , 5000)
// setInterval(()=>{
//     // console.log("setInterval");
//     document.writeln("MRU");
// },1500)
// console.log(40);
// console.log(50);


//! Promise

let p2 = new Promise((resolve , reject)=>{
    resolve("Success");
})
//console.log(p2);
p2.then((res)=>{
    console.log(res);
})
let p3 = new Promise((resolve , reject)=>{
    reject("Failure");
});
//console.log(p3);