let arr = [1,2,3,1,1,1,1,4,2,3];

/**
 * Brute Approach: two pinter and create all pairs of sub array;
 */

arr = [1,2,3,1,1,1,1,4,2,3];
function longestSubArrayWithSumKBrute(arr, sum){
   
    let maxLength = 0;
    for(let i = 0; i < arr.length; i++){
        let s = 0;
        for(let j = i; j < arr.length; j++){
            s += arr[j];
            if(s === sum) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }

    return maxLength;
}

console.log(longestSubArrayWithSumKBrute(arr, 2))