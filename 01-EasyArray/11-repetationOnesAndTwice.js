let arr = [1,1,2,3,3,4,4,3];

/**
 * Brute: Pick one by one elem and loop thourgh the whole array and check how many times numbers appears.
 * 
 * Time Complexity: O(n * n);
 * Space Comple: O(1)
 */

/**
 * Better: Hashing. Store the value and its repetation using new data Structure.
 */
arr = [1,1,2,2,6,3,3,4,4,3];
function repetationOnesAndTwice(arr){
    let max = Math.max(...arr);
    let v = new Array(max + 1).fill(0);

   
    for(let i = 0; i < arr.length; i++){
        v[arr[i]] = v[arr[i]] + 1;
    }

    
    for(let i = 0; i < v.length; i++ ){
        if(v[i] === 1) return i;
    }
}


console.log(repetationOnesAndTwice(arr))