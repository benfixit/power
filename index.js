/**
 * Calculate the value of num to the m power
 */


function powerIterative(num, m){
    if(m === 0){
        return 1;
    }
    let result = 1;
    for(let i = 1; i <= m; i++){
        result *= num;
    }

    return result;
}

function powerRecursive(num, m){
    if(m < 1){
        return 1;
    }

    return num * powerRecursive(num, m - 1);
}

console.log(powerIterative(10, 4))
console.log(powerRecursive(10, 4))
