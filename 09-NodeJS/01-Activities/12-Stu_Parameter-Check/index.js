
let variable1 = process.argv[2];
let variable2 = process.argv[3];

if(variable1 === variable2){
    console.log(`${variable1} === ${variable2}`, true);
} else
    console.log(`${variable1} === ${variable2}`, false);