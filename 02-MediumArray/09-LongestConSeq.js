let arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];

/**
 * Brute: One by one check its next consecutibe by adding +1.
 */
arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];
function longestConsecutiveSequence(arr) {
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let count = 1;
        let next = current + 1;
       
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === next){
                count++;
                next++
                j = -1; // this is cruicial because j++ occurs
            }
        }


       
        maxCount = count > maxCount ? count : maxCount;
    }
    return maxCount;
}

console.log(longestConsecutiveSequence(arr))