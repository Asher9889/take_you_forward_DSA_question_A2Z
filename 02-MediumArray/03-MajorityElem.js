let arr = [2, 2, 3, 4, 2, 3, 3, 4, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

/**
 * Brute Force
 * TC: O(n*n);
 * SC: O(1)
 */
function majorityBrute(arr) {
    let n = Math.floor(arr.length / 2);
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        let max = -Infinity
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++
            }
        }
        if (count >= n) return arr[i];
    }

    return -1
}

/**
 * Better Approach: Hashing
 */

function majorityBetter(arr) {
    let n = Math.floor(arr.length/2);

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const val = val;
        if (map.has(val)) {
            map.set(val, map.get(val + 1));
        } else {
            map.set(val, 1)
        }

        if(map.get(val > n)){
            return val;
        }
    }
}

console.log(majorityBetter(arr));

/**
 * Optimal Approach
 */
arr = [2, 2, 3, 4, 2, 3, 3, 4, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

function majorityOptimal(arr){

}