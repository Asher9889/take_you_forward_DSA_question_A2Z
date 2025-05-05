let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

/**
 * Brute Force: step01: loop and store non zero in a new array. [1,2,3,2,4,5,1]
 * step02: update the original array acoording to new one.
 * step03: remaining space will filled with zeros. 
 */

function mvZerosAtEndBrute(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            temp.push(arr[i]);
        }
    }
    /*
    for(let i = 0; i < arr.length; i++){
        arr[i] = temp[i] || 0; // instead of these use another loop
    }
    */
    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }

    for (let i = temp.length; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

console.log(mvZerosAtEndBrute(arr))

/**
 * optimal: need to use Two pointer so that can track zeros.
 * step01: first move non-zero to first.
 * step02: remaining filled with zero.
 */

arr = [0, 0, 2, 3, 0, 2, 0, 0, 4, 0, 5, 1, 0];

function mvZerosAtEndOptimal(arr) {
    let i = 0;
    let j = 0;
    while(j < arr.length){
        if( arr[j] !== 0){
            [arr[i], arr[j]] = [ arr[j], arr[i]];
            i++;
            j++;
        }else{
            j++;
        }
       
    }
    

    return arr;
}

console.log(mvZerosAtEndOptimal(arr))