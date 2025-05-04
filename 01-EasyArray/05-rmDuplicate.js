let arr = [1,2,2,3,4,5,5,6];

/**
 * Brute Force: taking another DS for storing unique values.
 * step01: if array is sorted that means arr[0] is the first unique elem.
 * step02: now loop  over the array and do if check
 */
function rmDuplicateBrute(arr){
    let unique = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i-1]){
            unique.push(arr[i]);
        }
    }
    return unique;
}

/**
 * Optimal: Two Pointer
 * step01: we know arr[0] is unique first elem for sure. Pointer 01 => arr[0]
 * step02: pointer 02 => arr[1];
 * step03: when find the next unique update the pointer;
 */

arr = [1,1,2,2,3,4,5,5,6,6,6,6];

function rmDuplicateOptimal(arr){
    let j = 1;
    let i = 0;
    while(j < arr.length){
        if(arr[j] !== arr[i]){
            arr[i +1] = arr[j];
            i++;
            j++;
        }else{
            j++;
        }
    }
    return i + 1;

}

console.log(rmDuplicateOptimal(arr))