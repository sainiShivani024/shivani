//to get date and time 

// "use strict"
// let count=0;
// let months= ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
// function getDateAndTime(){
  
//   setInterval(() => {
//     if(count<5){
//     let today= new Date();
//     console.log(`${today.getFullYear()}-${months[today.getMonth()]}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
//     count++;}
//   }, 1000);
// }




/* 
getDateAndTime();



function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6
*/


// setTimeout(()=>{
//   console.log('hello testing program');
// for(let index=0;index<10;index++){
//   const element=index;
//   console.log('this is the index no'+index);

// }


// },1000);

// console.log('done printing');

// const matrixElement = document.getElementById("matrix");
// const GRID_SIZE = 8;
// let counter = 0;

// const createMatrix = () => {
//   for (let y = 0; y < GRID_SIZE; y++) {
//     for (let x = 0; x < GRID_SIZE; x++) {
//       counter++;
//       const box = document.createElement("div");
//       box.innerHTML = counter;
//       box.className = "box";
//       matrixElement.appendChild(box);
//     }
//   }
// };

// createMatrix();

// const matrixElement = document.getElementById("matrix");
// const rotate = document.getElementById("rotate");
// const GRID_SIZE = 8;
// let counter = 0;
// const matrix = [];

// const createMatrix = () => {
//   for (let y = 0; y < GRID_SIZE; y++) {
//     const row = [];
//     for (let x = 0; x < GRID_SIZE; x++) {
//       counter++;
//       const box = document.createElement("div");
//       box.innerHTML = counter;
//       box.className = "box";
//       matrixElement.appendChild(box);
//       row.push({ box });
//     }
//     matrix.push(row);
//   }
// };

// const rotateMatrix = () => {
//   for (let x = 0; x < GRID_SIZE; x++) {
//     for (let y = x; y < GRID_SIZE - x - 1; y++) {
//       rotator(x, y);
//     }
//   }
// };

// const rotator = (x, y) => {
//   const topLeft = matrix[x][y];
//   const bottomLeft = matrix[GRID_SIZE - y - 1][x];
//   const bottomRight = matrix[GRID_SIZE - x - 1][GRID_SIZE - y - 1];
//   const topRight = matrix[y][GRID_SIZE - x - 1];
//   const original = topLeft.box.innerHTML;
//   topLeft.box.innerHTML = bottomLeft.box.innerHTML;
//   bottomLeft.box.innerHTML = bottomRight.box.innerHTML;
//   bottomRight.box.innerHTML = topRight.box.innerHTML;
//   topRight.box.innerHTML = original;
// };
// let arr=[1,2,3,4,5,6,7,8];
// let result=arr.map((e)=>e % 2==0);
// console.log(res);

//function to remove duplicacy
function removeDuplicate(a){
return[...new set[a]];
}

//concat
function concat(a,b){
  return[...a,...b];
}
concat(2,4);



