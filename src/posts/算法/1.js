// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。


function moveZeroes(nums) {
    let left = 0;
    let right = 0
   while(right < nums.length) {
    if(nums[right]) {
        [nums[left],nums[right]] = [nums[right],nums[left]]
        left++
    }
    right++
   }
}

const arr = [0,9,8,0,9,91]

moveZeroes(arr);
console.log(arr)

// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

// s = "ab#c", t = "ad#c"

function backspaceCompare(s, t) {
    function process(str) {
        const stack = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '#') {
                stack.push(str[i]);
            } else if (stack.length > 0) {
                stack.pop();
            }
        }
        return stack.join('');
    }

    return process(s) === process(t);
}