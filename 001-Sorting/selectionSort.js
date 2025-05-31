let arr = [4,1,5,2,3];

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let smallestIndex = i;
        for(let j =  i + 1; j < arr.length; j++){
            if(arr[j] < arr[smallestIndex]){
                smallestIndex = j;
            }
        }

        if(smallestIndex !== i){
            [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]]
        }

    }
    return arr;
}

console.log(selectionSort(arr))