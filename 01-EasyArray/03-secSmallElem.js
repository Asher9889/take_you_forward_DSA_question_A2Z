let arr = [1, 2, 4, 7, 7, 5];

function secondSmallest(arr){
    let smallest = arr[0];
    let ssmallest = Infinity;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < smallest){
            ssmallest = smallest
            smallest = arr[i];
        }else if(arr[i] !== smallest && arr[i] < ssmallest){
            ssmallest = arr[i];
        }
    }
    return ssmallest;
}

console.log(secondSmallest(arr))