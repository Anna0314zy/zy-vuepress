// 测试二分法

// 删除数组的某一个元素

const arr = [1];
// 删除数组重复元素
function removeDuplicates(arr) {
    if(arr.length === 0) return 0;
    let slow = 1;
    for(let fast = 1; fast < arr.length; fast++) {
        if(arr[fast] !== arr[slow - 1]) {
            arr[slow++] = arr[fast];
        }
    }
    return slow;
}
console.log(removeDuplicates(arr))