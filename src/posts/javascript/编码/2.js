/**
 * 统计某个月需要准备多少生日礼物
 *
 * @param {number} targetMonth 目标月份
 * @param {string[]} names 员工姓名列表
 * @param {string[]} birthdays 生日列表
 * @returns {number}
 */
function countBirthdayGifts(
    targetMonth,
    names,
    birthdays
) {

    // name -> birthday
    const map = new Map();

    // =========================
    // 1. 保存员工生日
    // 重复员工自动覆盖
    // =========================

    for (let i = 0; i < names.length; i++) {

        map.set(
            names[i],
            birthdays[i]
        );
    }

    // 礼物数量
    let count = 0;

    // =========================
    // 2. 遍历 map
    // =========================

    for (const birthday of map.values()) {

        // 日期格式：
        // 1985/5/10

        const arr = birthday.split("/");

        // 月份
        const month = Number(arr[1]);

        // 判断是否目标月份
        if (month === targetMonth) {
            count++;
        }
    }

    return count;
}
console.log(
    countBirthdayGifts(
        5,
        ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Helen"],
        [
            "1985/5/10",
            "1990/10/11",
            "1995/10/11",
            "2000/11/10",
            "2005/05/01",
            "2010/10/13",
            "2015/10/14",
            "2020/5/2"
        ]
    )
); //3
class RuleManager {
    constructor() {
        this.rules = new Map(); // 存储 rule_id -> rule_index
        this.failCount = 0;
    }

    // 验证数字是否在有效范围内 (1-9999)
    isValidRange(val) {
        return val >= 1 && val <= 9999;
    }

    // 解析 key=value 格式的参数
    parseParam(paramStr) {
        const match = paramStr.match(/^(\w+)=(\d+)$/);
        console.log(paramStr,match,'paramStr,match');
        if (!match) return { valid: false };
        
        const key = match[1];
        const val = parseInt(match[2], 10);
        
        if (!this.isValidRange(val)) return { valid: false };
        
        return { valid: true, key, val };
    }

    // 处理单条命令
    processCommand(cmdStr) {
        // 分割命令字符串为单词
        const parts = cmdStr.trim().split(/\s+/);
        console.log(parts,'parts');
        if (parts.length === 0) {
            this.failCount++;
            return;
        }

        const operation = parts[0];
        
        // 解析参数
        const params = {};
        for (let i = 1; i < parts.length; i++) {
            const paramStr = parts[i];
            const parsed = this.parseParam(paramStr);
            if (!parsed.valid) {
                this.failCount++;
                return;
            }
            params[parsed.key] = parsed.val;
        }

        // 执行操作
        switch (operation) {
            case 'add_rule':
                // 必须包含 rule_id 和 rule_index
                if (!params.hasOwnProperty('rule_id') || !params.hasOwnProperty('rule_index')) {
                    this.failCount++;
                    return;
                }
                
                // 检查 rule_id 是否已存在
                if (this.rules.has(params.rule_id)) {
                    this.failCount++;
                    return;
                }
                
                // 添加成功
                this.rules.set(params.rule_id, params.rule_index);
                break;
                
            case 'mod_rule':
                // 必须包含 rule_id 和 rule_index
                if (!params.hasOwnProperty('rule_id') || !params.hasOwnProperty('rule_index')) {
                    this.failCount++;
                    return;
                }
                
                // 检查 rule_id 是否存在
                if (!this.rules.has(params.rule_id)) {
                    this.failCount++;
                    return;
                }
                
                // 检查 rule_index 是否有变化
                const currentIndex = this.rules.get(params.rule_id);
                if (currentIndex === params.rule_index) {
                    this.failCount++;
                    return;
                }
                
                // 修改成功
                this.rules.set(params.rule_id, params.rule_index);
                break;
                
            case 'del_rule':
                // 必须包含 rule_id
                if (!params.hasOwnProperty('rule_id')) {
                    this.failCount++;
                    return;
                }
                
                // 检查 rule_id 是否存在
                if (!this.rules.has(params.rule_id)) {
                    this.failCount++;
                    return;
                }
                
                // 删除成功
                this.rules.delete(params.rule_id);
                break;
                
            default:
                // 未知命令，失败
                this.failCount++;
                break;
        }
    }

    // 解析批量命令字符串并执行
    executeBatch(inputStr) {
        // 重置状态
        this.rules.clear();
        this.failCount = 0;
        
        // 解析命令：提取所有 [...] 中的内容
        const regex = /\[([^\]]+)\]/g;
        const matches = [...inputStr.matchAll(regex)];
        console.log(matches,inputStr,'===========matches=============================');
        
        for (const match of matches) {
            console.log(match,'match=======================');
            const cmdContent = match[1]; // 去掉方括号的内容
            this.processCommand(cmdContent);
        }
        
        return this.failCount;
    }
}

// 测试用例
function test() {
    const manager = new RuleManager();
    
    // 示例1：所有操作成功
    const input1 = "[add_rule rule_id=1 rule_index=9999][mod_rule rule_id=1 rule_index=10][del_rule rule_id=1]";
    console.log("示例1输出:", manager.executeBatch(input1)); // 预期 0
    
    // // 示例2：add 缺少 rule_index，后续操作 rule_id 不存在
    // const input2 = "[add_rule rule_id=1][mod_rule rule_id=1 rule_index=10][del_rule rule_id=1]";
    // console.log("示例2输出:", manager.executeBatch(input2)); // 预期 3
    
    // // 示例3：rule_index 超出范围
    // const input3 = "[add_rule rule_id=1 rule_index=10000]";
    // console.log("示例3输出:", manager.executeBatch(input3)); // 预期 1
    
    // // 额外测试1：修改不存在的 rule_id
    // const input4 = "[mod_rule rule_id=1 rule_index=10]";
    // console.log("修改不存在的rule_id:", manager.executeBatch(input4)); // 预期 1
    
    // // 额外测试2：重复添加相同 rule_id
    // const input5 = "[add_rule rule_id=1 rule_index=10][add_rule rule_id=1 rule_index=20]";
    // console.log("重复添加相同rule_id:", manager.executeBatch(input5)); // 预期 1
    
    // // 额外测试3：修改时 rule_index 未变化
    // const input6 = "[add_rule rule_id=1 rule_index=10][mod_rule rule_id=1 rule_index=10]";
    // console.log("修改时值未变化:", manager.executeBatch(input6)); // 预期 1
    
    // // 额外测试4：删除不存在的 rule_id
    // const input7 = "[del_rule rule_id=1]";
    // console.log("删除不存在的rule_id:", manager.executeBatch(input7)); // 预期 1
}

// 运行测试
test();