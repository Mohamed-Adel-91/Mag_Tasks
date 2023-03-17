
let arr = [100,698,546,433,565,6546,644,454,454,655,551,54 ];

function sumArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
      sum += array[i];
    }
    console.log(sum);
    return(sum);
}

let sum = sumArray(arr);

let resultOfDivision  = sum / arr.length ;

console.log(resultOfDivision);