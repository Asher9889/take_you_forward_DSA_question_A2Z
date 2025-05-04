let arr = [1,2,2,3,6,6,7];

function isSorted(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] >= arr[i-1]){

        }else{
            return false
        }
    }
    return true;
}


console.log(isSorted(arr))