/**
 *判断字符串中括号是否匹配
 *
 * @param {string} str 输入的源字符串
 * @returns boolean
 */
function isBalanced(str) {
    const originStr = str; //转存参数
    let resultArr = []; //结果数组
    if (originStr.length == 0) return true;
    for (let i = 0, len = originStr.length; i < len; i++) {
        if (originStr[i] === '{') {
            resultArr.push(originStr[i]);
        } else if (originStr[i] === '}') {
            const temp = resultArr.pop();
            if (temp !== '{') {
                return false;
                break;
            }
        }
        if (originStr[i] === '[') {
            resultArr.push(originStr[i]);
        } else if (originStr[i] === ']') {
            const temp = resultArr.pop();
            if (temp !== '[') {
                return false;
                break;
            }
        }
        if (originStr[i] === '(') {
            resultArr.push(originStr[i]);
        } else if (originStr[i] === ')') {
            const temp = resultArr.pop();
            if (temp !== '(') {
                return false;
                break;
            }
        }
    }
    return resultArr.length === 0 ? true : false
}
const expression = "{()}{}[]";

// console.log(isBalanced(expression));

