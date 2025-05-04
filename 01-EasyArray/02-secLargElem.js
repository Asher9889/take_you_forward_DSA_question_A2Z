let arr = [1, 2, 4, 7, 7, 5];
/**
 * Brute: sort for lagest + loop for second (last to first).
 * 
 */


/**
 * Better
 */
function findSecondLargest(arr){
    function largeElem(arr) {
        let high = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] > high){
                high = arr[i]
            }
        }
        return high;
    }

   

    let secondLargest = -Infinity;
    let largestElem = largeElem(arr);
    for(let i = arr.length - 1; i >= 0; i-- ){
        if(arr[i] < largestElem && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
    
}

/**
 * Optimised
 */

/**
 * Optimised
 */

function optimisedSecLargest(arr){
    let secondLargest = -Infinity;
    let largest = arr[0];

    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > largest){
            largest = arr[i];
        }else if(arr[i] < largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest
}


arr = [10, 30, 20];

function optimisedSecLargest(arr){
    let secondLargest = -Infinity;
    let largest = -Infinity;

    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > largest){
            secondLargest = largest; // largest become 2nd largest
            largest = arr[i];
        }else if(arr[i] !== largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
}

console.log(optimisedSecLargest(arr))
console.log(-Infinity)