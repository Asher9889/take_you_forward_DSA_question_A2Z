let arr = [3,2,1,5,2];

/**
 * 1. Brute Force Approach: Sort the array and return last elem. 0(n);
 *      Quick and Merge have O(n logn)
 *      Bubble has o(n*n)
 * 2. loop and compare has O(n) which is optimised than above.
 */


function largestElem(arr){
    let high = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > high){
            high = arr[i];
        }
    }
    return high;
}

console.log(largestElem(arr))