let arr = [1,1,0,1,1,1,0,1,0,1]

function getMaxConsecutiveOnes(arr){
    let count = 0;
    let maxi = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            count++;
            maxi = count > maxi ? count : maxi;
        }else{
            count = 0;
        }
    }

    return maxi;
}

console.log(getMaxConsecutiveOnes(arr));