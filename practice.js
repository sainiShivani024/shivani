// // for concatination
// function concat(a,b){
//     return [...a,...b];
// }
// console.log(concat(2,3));

// // to find maximum in the array
// // let arr1=[1,2,3,4,];
// // console.log(Math.min(...arr1));

// //to remove duplicacy
// function removeDuplicate(a){
//     return[...new Set(a)];
// }
// removeDuplicate(6)

//Write a function that merges two sorted arrays into a new sorted array. [1,4,6],[2,3,5] → [1,2,3,4,5,6].
// You can do this quicker than concatenating them followed by a sort.

// let arr1=[1,4,6];
// let arr2=[2,3,5];
// function mergeSort(){
//   return[...arr1,...arr2].sort;
// }
// console.log(mergeSort());

//           0     1         2              3      4
// let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
// arr.splice(1, 3, "Let's", "dance");

// alert( arr ) // now ["Let's", "dance", "right", "now"]



// var isMomHappy = false;

// // Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

// angle bracket in html that is closed and opening brackt....
// );


//
let arr=[0,1,'',undefined,false,2,NaN,false,null,];
let filtered=arr.filter(Boolean);
console.log(filtered);














