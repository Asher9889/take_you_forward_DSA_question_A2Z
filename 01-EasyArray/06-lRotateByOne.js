let arr = [1,2,3,4,5];

function leftRotateByOne(arr){
    let temp = arr[0];
    for(let i = 1; i < arr.length; i++){
        arr[i-1] = arr[i];
        
    }
    arr[arr.length - 1] = temp;
    return arr;
}

console.log(leftRotateByOne(arr))

/**
 * Rotate by D place
 */

function leftRotateByDPlace(arr, place){
    let temp = arr.slice(0,place); // can be use loop for getting d elem
    place = place % arr.length;

    for(let i = place; i < arr.length; i++){
        arr[i-place] = arr[i];
    }

    let j = 0; // can we mathmatically remove extra j ?
    for(let i = arr.length - place; i < arr.length; i++){

        arr[i] = temp[j]; // for j = i-(arr.length - place)
        j++
    }
    return arr
}

arr = [1,2,3,4,5,6,7,8,9]
console.log(leftRotateByDPlace(arr, 4))


/**
 * Optimal where we do not using extra space.
 * revering the array
 */

arr = [1,2,3,4,5,6,7,8,9];

function leftRotateByDPlaceOptimal(arr, d){

    function reverse(arr, start, end){
        while(start < end){
            [arr[start], arr[end]] = [arr[end], arr[start]]; // destructuring the array and assigning the new value
            start++;
            end--;
        }
        return arr;
    }

    let place = d
    reverse(arr, 0, place - 1);
    reverse(arr, place, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
    return arr;
}

console.log(leftRotateByDPlaceOptimal(arr, 2))