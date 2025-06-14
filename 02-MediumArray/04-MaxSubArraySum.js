/**
 * Brute Approach: Trying out all SubArrays
 */

let arr = [-2,-3,4,-1,-2,1,5,-3];

function maxSubArraySum(arr){ // TC = O(n*n*n);
    let maxSum = -Infinity;
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j< arr.length; j++){
            let sum = 0;
            for(let k = i; k <= j; k++){
                sum += arr[k];
            }
            maxSum = sum > maxSum ? sum : maxSum;
        }
    }

    return maxSum;
}

function maxSubArraySumBetter(arr){ // O(n*n)
    let maxSum = -Infinity;
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = i; j < arr.length; j++){
            sum += arr[j]; 
            maxSum = sum > maxSum ? sum : maxSum;
        }
    }

    return maxSum;
}

function maxSubArraySumOptimal(arr){
   let maxSum = -Infinity;
   let currSum = 0;
   let start = -1;
   let end = -1;
   for(let i = 0; i < arr.length; i++){
    currSum += arr[i];
    if(currSum > maxSum){
        maxSum = currSum;
        end = i
    }
    if(currSum <= 0){
        currSum = 0;
        start = i + 1;
    }
   }

   return {maxSum, start, end};
}

console.log(maxSubArraySumOptimal(arr))