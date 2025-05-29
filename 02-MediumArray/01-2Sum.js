let arr = [2,6,5,8,11];

/**
 * Brute Approach: using two loop check every pair and sum it then compare.
 */

function twoSumBrute (arr, target){
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if((arr[i] + arr[j]) === target){
                return ([i,j]);
            }
        }
    }
    
    return  false;
}

// console.log(twoSumBrute(arr,13))

/**
 * Better: First Hashmap the whole array and then just pure math logic
 * suppose target = 13;
 *  x = 13 - elem; is x is present in map just return the index of map.
 */

function twoSumBetter(arr, target){
    let m = new Map();
    for(let i = 0; i < arr.length; i++){
        m.set(arr[i], i);
    }

    for( let i = 0; i < arr.length; i++){
        let x = target - arr[i];
        if(m.has(x) && m.get(x) !== i){
            return [i, m.get(x)];
        }
    }
    return false;
}
console.log(twoSumBetter(arr, 13))

/**
 * Optimal: Using two pointer and sort the array. 
 */

arr =  [2,6,5,8,11];

function twoSumOptimal(arr, target){
    // First sort;
    

    let i = 0;
    let j = arr.length - 1;
    while (i < j){
        if(arr[i] + arr[j] === target){
            return [i , j];
        }
        else if (arr[i] + arr[j] > target){
            j--;
        } else{
            i++;
        }
    }
}