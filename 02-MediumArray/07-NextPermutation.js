let arr = [2,1,5,4,3,0,0];

/**
 * Brute: Create all the permutations in sorted order: Recursion
 * Return next index elem.
 */

/**
 * Optimal: Find the breaking ponit. till breaking point we can provide next permutation.
 * after breaking point Sort the array.
 * 
 */
// arr = [2,1,5,4,3,0,0];
arr = [1,2,3]
function reverseBetween(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    return arr;
  }
function nextPermutation(arr){
    let breakingPoint = -1;
    for(let i = arr.length-1; i >= 0; i--){
        if(arr[i-1] < arr[i]){
            breakingPoint = i-1;
            break;
        }
    }
    if(breakingPoint === -1){
        arr.reverse();
    }
    
    for(let i = arr.length -1; i >= breakingPoint; i--){
        if(arr[i] > arr[breakingPoint]){
            [arr[i], arr[breakingPoint]] = [arr[breakingPoint], arr[i]];
            console.log(arr)
            break;
        }
    }

    // Now convert in ascending order from breakingPoint to arr.length-1
    reverseBetween(arr, breakingPoint+1, arr.length-1)
    

    return arr;
}

console.log(nextPermutation(arr))