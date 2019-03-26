const arrOri = [23, 56, 34, 87, 45, 26, 98, 37, 20, 22, 77, 44, 55, 33, 80];

function bubble(arr) {
    for (var len = arr.length, i = len; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // var temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] = temp;
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }

        }
    }
    return arr;
};
function bubbleSort2(arr) {
    var i = arr.length - 1; //初始时,最后位置保持不变　　
    while (i > 0) {
        var pos = 0; //每趟开始时,无记录交换
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j; //记录交换的位置
                var tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
            }

        }
        i = pos; //为下一趟排序作准备
    }
    return arr;
}
const quickSort = (array) => {
    const sort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
            return
        }
        let i = left
        let j = right
        const baseVal = arr[j] // 取无序数组最后一个数为基准值
        while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
            while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
                i++
            }
            arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
            while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
                j--
            }
            arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
        }
        arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
        sort(arr, left, j - 1) // 将左边的无序数组重复上面的操作
        sort(arr, j + 1, right) // 将右边的无序数组重复上面的操作
    }
    const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
    sort(newArr)
    return newArr
}
function quickSort2(arr) {
    if (arr.length <= 1) return arr;
    var baseIndex = Math.floor(arr.length / 2);
    var base = arr.splice(baseIndex, 1)
    var left = [], right = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] < base[0]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort2(left).concat(base, quickSort2(right));
}
function quickSort3(array, left, right) {
    if (left < right) {
        var x = array[right], i = left - 1, temp;
        for (var j = left; j <= right; j++) {
            if (array[j] <= x) {
                i++;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        quickSort3(array, left, i - 1);
        quickSort3(array, i + 1, right);
    }
    return array;
}
const testq = (arr, left = 0, right = arr.length-1) => {
    if (left >= right) return;
    var i = left, j = right, base = arr[j];
    while (i < j) {
        while (i < j && arr[i] <= base) {
            i++
        }
        arr[j] = arr[i];
        while (i < j && arr[j] >= base) {
            j--
        }
        arr[i] = arr[j];
    }
    arr[j] = base;
    testq(arr, left, j - 1);
    testq(arr, j + 1, right);
    return arr
}
console.log(testq(arrOri, 0, arrOri.length-1));