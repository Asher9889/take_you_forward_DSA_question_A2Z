let arr1 = [1,1,2,2,2,3,3,4,5,5];
let arr2 = [2,3,4,4,5,6,6,7];

/**
 * Brute Force: Step01: loop over 1st array and push unique elem into new array;
 * step02: lopp over arr2 
 */

function unionBrute(arr1, arr2){
    let temp = [];
    // for uniuely inersting arr1 elem in temp
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr1[i+1]){
            temp.push(arr1[i]);
        }
    }
    // for arr2 let temp = [ 1, 2, 3, 4, 5 ]; arr2 = [2,3,4,4,5,6,6,7];
    for(let i = 0; i < arr2.length; i++){
        let found = false; // if elem not found at the end push it into the temp.
        for(let j = 0; j < temp.length; j++){
            if(arr2[i] === temp[j]){
                found = true;
                break;
            }
        }
        if(!found){
            temp.push(arr2[i]);
        }
    }
    return temp;
    
}

console.log(unionBrute(arr1, arr2));


/**
 * optimal: Two pointer
 * step01: one pointer for arr1
 * step02: 2nd pointer for arr2
 * step03: compare both pointer who comes first insert.
 */

arr1 = [1,1,2,2,2,3,3,4,5,5];
arr2 = [2,3,4,4,5,6,6,7];
function unionOptimal(arr1, arr2){
    let i = 0;
    let j = 0;
    let union = [1]
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            if( arr1[i] !== union[union.length - 1]){
                union.push(arr1[i]);  
            }
            i++;
        }else {
            if(arr2[j] !== union[union.length - 1]){
                union.push(arr2[j]);
            }
            j++;
        }
    }
    while(i < arr1.length){
        if(arr1[i] !== union[union.length -1]){
            union.push(arr1[i]);
        }
        i++;
    }
    while(j < arr2.length){
        if(arr2[j] !== union[union.length -1]){
            union.push(arr2[j]);
        }
        j++;
    }
    return union;
}

console.log(unionOptimal(arr1, arr2))