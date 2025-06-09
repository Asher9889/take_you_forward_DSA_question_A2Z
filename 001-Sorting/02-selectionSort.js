let nums = [1,4,5,2,3];

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let smallestElem = i;
        
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[smallestElem]){
                smallestElem = j;
            }
        }

        if(i !== smallestElem){
            [arr[smallestElem], arr[i]] = [arr[i], arr[smallestElem]];
        }
    }
    return arr;
}

console.log(selectionSort(nums))