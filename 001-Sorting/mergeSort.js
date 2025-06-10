let nums1 = [1,3,5];
let nums2 = [2,2,5,6,7];

// 1, 2

function mergeTwoArray(arr1, arr2){
    let i = 0;
    let j = 0;
    let results = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            results.push(arr2[j]);
            j++;
        }else{
            results.push(arr1[i]);
            i++
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;
}

function mergeSort(arr, low, high){
    if(low <= high ) return;
    const mid = Math.floor(arr.length / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    const left = arr.slice(low, mid);
    const right = arr.slice(mid +1, high)
    mergeTwoArray(left, right);
}

console.log(mergeSort(nums2, 0, 4))