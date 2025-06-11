let arr = [0, 1, 2, 1, 0, 2, 1, 2, 0, 1, 1, 2, 0, 1];

/**
 * Brute: Count whole the unique elem and its frequency using loop. the again loop thre times to updated the array.
 * one for zero , second for one, third for two.
 */

/**
 * Better: Merge Sort. TC = O(n log n) SC = O(n)
 */

/**
 * Optimal : Dutch National Flag Algorithm
 */

function dnf(arr) {

    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++
        } else if (arr[mid] === 1) {
            mid++;
        } else if (arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--;
        }
    }
    return arr;
}

console.log(dnf(arr))