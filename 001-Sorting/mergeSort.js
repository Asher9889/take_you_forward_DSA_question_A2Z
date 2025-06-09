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

console.log(mergeTwoArray(nums1, nums2))