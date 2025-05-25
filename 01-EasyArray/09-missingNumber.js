// Find the missing number arr[] = [1,2,3,4]


/**
 * Brute Force: compare 1 to length that elem is present in the array or not?
 * 
 */


let value = [2, 3, 1, 4]; // 5 length means num must be 1 2 3 4 5

function getMissingNumberBrute(arr, length){
    for(let i = 1; i <= length; i++){
        let found = false;
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === i){
                found = true;
                break;
            }
        }
        if(!found){
            return i;
        }
    }
}
console.log(getMissingNumberBrute(value, 5))


/**
 * Better Approach: Using hashMap means. create a empty array of given length; then allocate the number. then return empty index number
 */

value = [2, 3, 1, 4];
function getMissingNumberBetter(arr, length){
    const hashArray = new Array(length + 1).fill(false);
   

    for(let i = 0; i < arr.length; i++){
        hashArray[arr[i]] = true;
    }
    for(let i = 1; i <= hashArray.length; i++){
        if(!hashArray[i]) return i;
    }
}


console.log(getMissingNumberBetter(value, 5))


/**
 * Optimal Approach: Sum of n natural number.
 */

value = [2, 3, 1, 4,5,8,6,7,9];
function getMissingNumberOptimal(arr, length){
    let n = length;
    let actualSum = (n * (n + 1)) / 2;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return (actualSum - sum);
}

console.log(getMissingNumberOptimal(value, 10))