/**
 * 2DMatrix = [[1,2,3,], [4,5,6], [7,8,9]]; 
 */

let arr = [[0,2,3,], [4,5,6], [7,8,9]]; // 3*3 Matrix

function brute(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] === 0){
                // row ==> 0
                for(let k = 0; k < arr.length; k++){
                    if(arr[i][k] !== 0){
                        arr[i][k] = -1;
                    }
                }
                // col ==> 0
                for(let l = 0; l < arr.length; l++){
                    if(arr[l][j] !== 0){
                        arr[l][j] = -1;
                    }
                }
            }
        }
    }

    // Again loop so that can covert -1 to 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] === -1){
                arr[i][j] = 0;
            } 
        }
    }
    return arr;
}


console.log(brute(arr))