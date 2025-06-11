let nums = [4, 1, 5, 2, 3];
let nums2 = [1,2,0,0,2,1,1,0,2,0,1,2]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElem = arr[i];
        let prevElem = i - 1;
        while (prevElem >= 0 && arr[prevElem] > currElem) {
            arr[prevElem + 1] = arr[prevElem];
            prevElem--;
        }
        arr[prevElem + 1] = currElem;
    }
    return arr
}


console.log(insertionSort(nums2))