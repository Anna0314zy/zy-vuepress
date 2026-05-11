/**
 * 题目描述：
员工A的磁盘空间经常被耗尽，他需要找到占用空间最大的目录或文件，然后决定如何清理文件释放空间。
给定某一目录，请编写程序帮助他统计该目录内一级子目录和文件的占用空间，并返回目标目录一级子项(文件或子目录)中占用空间最大的项。

规则说明:
1. 目录占用空间为其内部所有文件Size的总和，目录本身Size为0。
2. 目录深度不高于7层，目录或文件名总长度不超过128字节。
3. 当存在多个子项占用空间均为最大时，多个子项采用字符升序排列。
4. 目标目录不在文件系统中时(输入路径前缀匹配不到任何路径)，返回空列表。
 */
function calculateMaxSpace(targetDir, fileList, sizeList) {
    const spaceMap = new Map();

    let maxSize = 0;

    for (let i = 0; i < fileList.length; i++) {
        const filePath = fileList[i];
        const size = sizeList[i];

        // 必须是 targetDir 下的路径
        if (
            filePath !== targetDir &&
            !filePath.startsWith(targetDir + "/")
        ) {
            continue;
        }

        // 获取相对路径
        const relative = filePath
            .slice(targetDir.length)
            .replace(/^\/+/, '');

        if (!relative) continue;

        // 一级子项
        const firstItem = relative.split('/')[0];
        const fullItem = `${targetDir}/${firstItem}`;
        console.log(firstItem, 'firstItem', fullItem, 'fullItem')

        // 累加空间
        const newSize =
            (spaceMap.get(fullItem) || 0) + size;

        spaceMap.set(fullItem, newSize);

        // 维护最大值
        maxSize = Math.max(maxSize, newSize);
    }

    console.log(spaceMap, 'spaceMap');

    const result = [];

    for (const [key, value] of spaceMap) {
        if (value === maxSize) {
            result.push(key);
        }
    }

    return result.sort();
}
console.log(
  calculateMaxSpace(
    "/project",
    [
      "/project/src/a.js",
      "/project/src/components/b.js",
      "/project/src/components/c.js",
      "/project/docs/readme.md",
      "/project/docs/q/b.md",
        "/project/docs/c.md"
    ],
    [100, 200, 300, 50,600,20]
  )
);
/**
 * 、输入M，N两个数，则按照以下规则形成一个数列；
2、数列的前M个元素的值为1到M；
3、从M+1个元素开始，计算的逻辑为：
如果其前面的M个元素中，存在值相同的元素，则该位置上的数值等于前面M个数中最大的数值与最小的数值之和；
如果其前面的M个元素中，不存在值相同的元素，则该位置上的数值等于前面M个数中最大的数值与最小的数值之差；
请计算该数列第N个位置上的数值
补充说明：
M取值范围：3<= M <= 10
N取值范围：1 <= N <= 50
 */
// console.log(getValue(5, 1)); // 1
// console.log(getValue(5, 5)); // 5
// console.log(getValue(5, 6)); // 4
// console.log(getValue(5, 7)); // 7
// console.log(getValue(5, 8)); // 10

// console.log(getValue(3, 10));
// console.log(getValue(5, 20));
// 初始：
// 1 2 3 4 5

// 第6个：
// 窗口：1 2 3 4 5
// 无重复
// 5 - 1 = 4

// 数列：
// 1 2 3 4 5 4

// 第7个：
// 窗口：2 3 4 5 4
// 有重复
// 5 + 2 = 7

// 数列：
// 1 2 3 4 5 4 7

// 第8个：
// 窗口：3 4 5 4 7
// 有重复
// 7 + 3 = 10
// 滑动窗口问题
function getValue(M, N) {
    const arr = [];

    for (let i = 1; i <= M; i++) {
        arr.push(i);
    }

    while (arr.length < N) {
        const window = arr.slice(-M);

        console.log(window, 'window');

        const hasDuplicate =
            new Set(window).size !== window.length;

        console.log(hasDuplicate, 'hasDuplicate');

        const max = Math.max(...window);
        const min = Math.min(...window);

        const next = hasDuplicate
            ? max + min
            : max - min;

        arr.push(next);
    }

    console.log(arr);
}

getValue(3, 10);

/**
 * 你在给定的数字地形图中寻找登山路径，数字代表当前位置的海拔高度，要求从最低海拔出发，不断攀登，最终到达最高山峰。你需要寻找所有满足条件的登山路径。 地图已经保证最低海拔和最高山峰都只有一个。
 */

/**
 * 勇攀数字高峰
 * DFS + 回溯
 *
 * @param {number[][]} grid 海拔地图
 * @param {number} maxDiff 单步最大高度差
 * @returns {number} 合法路径数量
 */
/**
 * 打印所有登山路径
 * DFS + 回溯
 */

/**
 * DFS + 回溯（超详细注释版）
 *
 * 题目：
 * 从最低点出发
 * 找到所有到最高点的合法路径
 */

function printPaths(grid, maxDiff) {

    // 行数
    const n = grid.length;

    // 列数
    const m = grid[0].length;

    // =========================
    // 1. 找最低点（起点）
    // =========================

    let minVal = Infinity;

    // 起点坐标
    let startX = 0;
    let startY = 0;

    // =========================
    // 2. 找最高点（终点）
    // =========================

    let maxVal = -Infinity;

    // 终点坐标
    let endX = 0;
    let endY = 0;

    // 遍历整个二维地图
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < m; j++) {

            // 当前海拔
            const val = grid[i][j];

            // 找更小值
            if (val < minVal) {

                minVal = val;

                // 记录最低点坐标
                startX = i;
                startY = j;
            }

            // 找更大值
            if (val > maxVal) {

                maxVal = val;

                // 记录最高点坐标
                endX = i;
                endY = j;
            }
        }
    }

    // =========================
    // 3. visited 数组
    // =========================
    // 用来记录：
    // 当前路径中
    // 哪些点已经走过
    //
    // 防止：
    // 一个点重复访问
    // 出现死循环
    // =========================

    const visited = Array.from(
        { length: n },
        () => Array(m).fill(false)
    );

    // =========================
    // 4. 四个方向
    // =========================
    //
    // [1,0]  -> 下
    // [-1,0] -> 上
    // [0,1]  -> 右
    // [0,-1] -> 左
    // =========================

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    // 总路径数
    let count = 0;

    // =========================
    // DFS 函数
    // =========================
    //
    // x,y:
    // 当前所在位置
    //
    // path:
    // 当前已经走过的路径
    // =========================

    function dfs(x, y, path) {

        // =========================
        // 5. 当前点加入路径
        // =========================
        //
        // 例如：
        // path:
        // [2]
        //
        // 继续到3：
        // [2,3]
        // =========================

        path.push([x, y]);

        // =========================
        // 6. 是否到终点
        // =========================

        if (x === endX && y === endY) {

            // 找到一条完整路径
            count++;

            console.log(`找到第 ${count} 条路径`);

            // 打印坐标路径
            console.log(
                path
                    .map(([i, j]) => `(${i},${j})`)
                    .join(" -> ")
            );

            // 打印海拔路径
            console.log(
                path
                    .map(([i, j]) => grid[i][j])
                    .join(" -> ")
            );

            console.log("----------------");

            // =========================
            // 回溯
            // =========================
            //
            // 当前点退出路径
            //
            // 例如：
            // [2,3,4]
            //
            // 返回时：
            // [2,3]
            // =========================

            path.pop();

            return;
        }

        // =========================
        // 7. 标记当前点已访问
        // =========================

        visited[x][y] = true;

        // =========================
        // 8. 尝试四个方向
        // =========================

        for (const [dx, dy] of dirs) {

            // 下一步坐标
            const nx = x + dx;
            const ny = y + dy;

            // =========================
            // 9. 越界判断
            // =========================

            if (
                nx < 0 ||
                nx >= n ||
                ny < 0 ||
                ny >= m
            ) {
                continue;
            }

            // =========================
            // 10. 是否已经访问
            // =========================
            //
            // 已访问：
            // 不能重复走
            // =========================

            if (visited[nx][ny]) {
                continue;
            }

            // 当前海拔
            const curr = grid[x][y];

            // 下一步海拔
            const next = grid[nx][ny];

            // 高度差
            const diff = next - curr;

            // =========================
            // 11. 判断是否合法
            // =========================
            //
            // 条件1：
            // 必须严格递增
            //
            // 条件2：
            // 高度差 <= maxDiff
            // =========================

            if (
                diff > 0 &&
                diff <= maxDiff
            ) {

                // =========================
                // DFS 深入搜索
                // =========================
                //
                // 相当于：
                // 人继续往前走
                // =========================

                dfs(nx, ny, path);
            }
        }

        // =========================
        // 12. 回溯 visited
        // =========================
        //
        // 当前路径搜索结束
        //
        // 要恢复现场
        //
        // 允许：
        // 其它路径再次访问这里
        // =========================

        visited[x][y] = false;

        // =========================
        // 13. 当前点退出路径
        // =========================
        //
        // 例如：
        //
        // 进入时：
        // [2,3]
        //
        // 返回时：
        // [2]
        // =========================

        path.pop();
    }

    // =========================
    // 14. 从最低点开始 DFS
    // =========================

    dfs(startX, startY, []);

    console.log("总路径数:", count);

    return count;
}


/* =========================
   测试
========================= */

printPaths(
    [
        [4, 3],
        [3, 2]
    ],
    1
);



// 开始：
// [2]

// 往上：
// [2,3]

// 到4：
// [2,3,4]

// 返回：
// [2,3]

// 再返回：
// [2]

// 再走另一条：
// [2,3]

// 再到4：
// [2,3,4]