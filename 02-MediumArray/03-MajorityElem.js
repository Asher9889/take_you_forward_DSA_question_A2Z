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
    let n = Math.floor(arr.length / 2);

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (map.has(val)) {
            map.set(val, map.get(val) + 1);
        } else {
            map.set(val, 1)
        }

        if (map.get(val) > n) {
            return val;
        }
    }
}

console.log(majorityBetter(arr));

/**
 * Optimal Approach: Moore's Voting Algorithm
 */
arr = [2, 5, 8, 2, 3, 4, 2, 3, 4, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];

function majorityOptimal(arr) {
    let el = null;
    let count = 0;

    // It will give us a majority elem only
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            el = arr[i];
            count++
        }
        else if (arr[i] === el) {
            count++;
        }
        else {
            count--;
        }
    }

    let count1 = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === el){
            count1++;
        }
    }

    return count1 > Math.floor(arr.length/2) ? el : -1

    
}

console.log(majorityOptimal([3, 3, 4, 2, 3, 3, 3])); // 3
console.log(majorityOptimal([1, 2, 3, 4]));          // -1
console.log(majorityOptimal([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityOptimal([5, 5, 5, 5, 5]));       // 5
