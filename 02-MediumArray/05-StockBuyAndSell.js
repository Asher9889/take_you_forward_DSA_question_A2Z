let arr = [7, 1, 5, 3, 6, 4];

/**
 * Brute: Create Every Pair using two loop.
 */

function buyAndSellBrute(arr) {
    let maxProfit = 0;
    for (let i = 0; i < arr.length; i++) { // for buying
        for (let j = i + 1; j < arr.length; j++) { // for selling
            let profit = 0;
            if (arr[j] > arr[i]) {
                profit = arr[j] - arr[i];
                maxProfit = profit > maxProfit ? profit : maxProfit;
            }
        }
    }

    return maxProfit;
}

/**
 * If anyday we found lower prices just update my min prices. 
 * if any day we bought we need to sell than other days.
 */


function buyAndSellOptimal(arr){
    let minPrice = Infinity; //
    let profit = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minPrice){ // This day suppose i buy
            minPrice = arr[i];
        }else{
            let cost = minPrice - arr[i]; // this day i sell
            if(cost > profit){
                profit = cost;
            } 
        }
    }

    return profit;

}

console.log(buyAndSellBrute(arr))