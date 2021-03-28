
let thisIsAnArray = [3, 4, 5];

const totalAll = (array) => {
    sum = 0;
    for (let i=0; i<array.length;i++){
        sum += array[i];
    }
    return sum
}
console.log(totalAll(thisIsAnArray))



//2
let average = (array) => {
    sum =0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum/array.length
}

console.log(average(thisIsAnArray))

//BONUS

let newAverage = (sum, array) => {
   return sum/array.length
}

console.log(newAverage(totalAll(thisIsAnArray), thisIsAnArray))

//Bonus 2

let anotherArray = [7 , 10, 30, 2]

const largestNum = (array) => {
    return Math.max(...array)
}
console.log(largestNum(anotherArray))

// Bonus 3

const largestSum = (array1, array2) => {
    return Math.max(...array1) + Math.max(...array2)
}

console.log(largestSum(anotherArray, thisIsAnArray))