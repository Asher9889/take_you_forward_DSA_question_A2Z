let arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];

/**
 * Brute: One by one check its next consecutibe by adding +1.
 */
arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];
function longestConsecutiveSequenceBrute(arr) {
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let count = 1;
        let next = current + 1;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === next) {
                count++;
                next++
                j = -1; // this is cruicial because j++ occurs
            }
        }



        maxCount = count > maxCount ? count : maxCount;
    }
    return maxCount;
}

/**
 * Better 
 */

arr = [1,1,1,2,2,2,3,3, 4,100,100,101,101,102];
function longestConsecutiveSequenceBetter(arr) {
    let lastMax = arr[0];
    let maxCount = 0;
    let count = 1;
    let next = lastMax + 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === next) {
            count++;
            lastMax = next;
            next++;
            maxCount = count > maxCount ? count : maxCount;
        }
        if (arr[i] > next) {
            count = 0;
            lastMax = arr[i];
            count++;
            next++;
            maxCount = count > maxCount ? count : maxCount;
        }
    }
    return maxCount;
}

/**
 * Optimal Solution: Using Set Data Structure.
 */
arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];
function longestConsecutiveSequenceOptimal(arr){
    let set = new Set(arr);
    let maxCount = 0;
    // set be like = {102, 4, 100, 1, 101, 3, 2};
    for(let value of set){
        if(!set.has(value - 1)){ // finding the starting point of sequence
            let current = value;
            let count = 1;

            while(set.has(current + 1)){
                current++;
                count++;
            }
        }
        maxCount = Math.max(maxCount, count);
    }
    // set be like = {1,2,3,4,5,6} only unique elem.

}
    console.log(longestConsecutiveSequenceBetter(arr))