
总结

Array Tag： [leetcode](https://leetcode.com/problemset/all/?topicSlugs=array)


## 指针用法

双指针：

1. 一个定位，另一个遍历
2. 头尾指针
3. 快慢指针


## 题目

### 26 题 数组去除指定元素

双指针
两个指针都从头开始走
一个定位，一个遍历(遍历的过程遇到不删除的元素就将元素复制给指针一指向的位置，同时指针一向后移动一位)。
最终指针一的位置就只最终数组的末尾
