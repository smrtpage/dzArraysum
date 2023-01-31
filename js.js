let zapyt = prompt("How many digits will be in the massive: ")
let massive = [];

for(let i = 0; i < zapyt; i++){
    massive.push(Math.floor(Math.random() * 100)); 
}

console.log(massive);




function ArraySum(){
    let sum = 0;
    for(let i = 0; i < massive.length; i++){
        sum += massive[i];
    }
    return sum;
}

console.log(ArraySum());

