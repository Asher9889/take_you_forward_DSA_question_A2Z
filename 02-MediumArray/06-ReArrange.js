let arr = [3, 1, -2, -5, 2, -4];

/**
 * Brute Force: O(n) + O(n) = O(n) 
 * SC = O(n)
 */
function reArrangeBrute(arr) {
    let n = Math.floor(arr.length / 2) // Length is even.
    let posi = new Array();
    let negi = new Array();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            posi.push(arr[i]);
        } else {
            negi.push(arr[i]);
        }
    }

    for (let i = 0; i < n; i++) {
        arr[2 * i] = posi[i];
        arr[2 * i + 1] = negi[i];

    }
    return arr;
}

/**
 * Optimal
 */

function reArrangeOptimal(arr) {
    let posIndex = 0;
    let negIndex = 1;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result[posIndex] = arr[i];
            posIndex = posIndex + 2;
        } else {
            result[negIndex] = arr[i];
            negIndex = negIndex + 2;
        }
    }
    return result;
}

console.log(reArrangeOptimal(arr))