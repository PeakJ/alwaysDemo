/**
 * 
 * @param {number} n 
 */
function createFibonnacci(n,p,s,b){
    if (n<1) {
        console.log('参数必须大于1，请重新设置');
        return '参数必须大于1，请重新设置';
    }
    let fiboArray = [1];
    let currentValue = 1;
    let preValue = 0;
    let index = n-1;
    while(index>0) {
        currentValue = currentValue + preValue;
        fiboArray.push(currentValue);
        preValue = currentValue - preValue;
        index--;
    }
    return fiboArray;
}

console.log(createFibonnacci(1));

