/**
 * Leaders: There must be not bigger elem on the right side.
 */
let nums = [10,22,12,3,0,6] 
function leadersBrute(arr){
    let leaders = [];
    for(let i = 0; i < arr.length; i++){
        let isLeader = true;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] > arr[i]) {
                isLeader = false;
                break;
            }
        }
        isLeader && leaders.push(arr[i]);
    }

    return leaders;
}

function leadersOptimal(arr){
    let maxi = -Infinity;
    let leaders = [];
    for(let i = arr.length-1; i >= 0; i--){
        if(arr[i] > maxi){
            leaders.push(arr[i]);
            maxi = arr[i]
        }
    }
    return leaders;
}

console.log(leadersOptimal(nums));