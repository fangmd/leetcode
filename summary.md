`* 表示还不太会的`

# 算法&数据结构

## 动态规划

1. 在做递归的时候，会出现重叠子问题，我们保存一下子问题的答案，可以避免重复处理子问题。

常见题目：选最大值，选最优解

求数组最大和的思路：

```
OPT(n) = max{ OPT(n-1) + Vn , Vn }

OPT(0) = V0;
OPT(1) = max{ V0 + V1 , V1 };
OPT(2) = max{ OPT(1)+V2 , V2 };
...

可以用递归，也可以用for循环(推荐)。

使用 for 循环做，需要一个数组 dp 存储子问题处理结果。 也可以只使用一个变量保存上个子问题处理结果。
```

- `53.maximun-subarray` array
- `70.climbing-stairs.js` other

## 二叉树

1. 深度优先遍历
2. 广度优先遍历
3. 前序：根节点 -》 左子树 -》 右子树
4. 中序：左子树 -》 根节点 -》 右子树
5. 后序：左子树 -》 右子树 -》 根节点

递归做法，非递归做法(栈)

- `100.same-tree` other, 二叉树遍历

## 贪心算法

- `11.container-with-most-water`

## 冒泡排序

- `75.sort-colors`

## 快速排序算法

## 堆排序算法

## 归并排序

## 二分查找算法

## BFPRT(线性查找算法)

## DFS（深度优先搜索）

递归法，回溯算法求解

- `39. Combination Sum`
- `46.permutations`
- `47.permutations2`
- `78.subsets`

回溯算法结构:

```
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```

## BFS(广度优先搜索)

## Dijkstra 算法

## 朴素贝叶斯分类算法
