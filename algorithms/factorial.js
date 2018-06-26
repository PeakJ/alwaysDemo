/**
 *
 *
 * @param {number} [n=0]
 * @returns n的阶乘
 */
function factorial(n = 0) {
    if (n<0) {
        return '参数非法，应为正整数'
    }
    let result = 1;
    while (n) {
        result = result * n;
        n--;
    }
    return result;
}

console.log(factorial(5));
