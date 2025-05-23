// Find the missing number arr[] = [1,2,3,4]


/**
 * Brute Force: compare 1 to length that elem is present in the array or not?
 * 
 */


let value = [2, 3, 1, 4, 5, 6]; // 5 length means num must be 1 2 3 4 5


function getMissingNumberBrute(arr, length) {
    for (let i = 1; i <= length; i++) {

        let found = false;
        for (j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }
        if (!found) {
            return i;
        }
    }
    return "error"
}

console.log(getMissingNumberBrute(value, 7))

