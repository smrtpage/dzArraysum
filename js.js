let zapyt = prompt("How many digits will be in the massive: ")
let massive = [];

for(let i = 0; i < zapyt; i++){
    massive.push(Math.floor(Math.random() * 100)); 
}

console.log(massive);




// function ArraySum(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
// }

// ArraySum();

