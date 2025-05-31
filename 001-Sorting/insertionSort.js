let arr = [4,1,5,2,3];

function insertionSort(arr){
    for(let i = 1; i < arr.length; i ++){
        let currElem = arr[i];
        let prev = i - 1;
        if(prev >= 0 && currElem > arr[prev]){
            
        }
    }
    return arr;
}

console.log(insertionSort(arr))