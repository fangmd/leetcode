
总结

Array Tag： [leetcode](https://leetcode.com/problemset/all/?topicSlugs=array)

可能的处理方式:

1. 双重循环
2. 双指针从0,1开始往后移动
3. 移除某个元素：双指针


ES6:

arr.splice 是直接修改原来的数组，


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

