---
theme: dracula
title: Golang Pointer
---

# Golang指针

by **一杯甜的苦咖啡**

<!-- 
大家好，这里是一杯甜的苦咖啡，今天想和大家分享一下编程中最基本的指针，这里我以Golang为例，希望能帮助到大家
-->

---

```go
var a = 2024
```

<div my-8 flex text-gray text-6>
    <div border-gray border-2 px-2 w-50>0x12312312</div>
    <div border-gray border-2 border-l-0 w-50 px-2>2024</div>
</div>

<div v-click text-10 >
    & 取地址符
</div>
<div v-click text-10 >
    * 取值符
</div>

---
transition: fade
---

```go
var a = 2024
```

<div my-8 flex text-gray text-6>
    <div border-gray border-2 px-2 w-50>0x12312312</div>
    <div border-gray border-2 border-l-0 w-50 px-2>2024</div>
</div>

---

首先我们需要知道计算机中的数据是如何存储在内存中的

每当我们声明一个变量，计算机会开辟一段内存来存储这个变量的值

计算机正是靠着这些地址来访问到我们存储的变量

接下来就涉及地址相关最重要的两个运算符：取地址符和取值符，均为个人叫法，因为比较好理解

当使用 取地址符 & 时，取得的为左侧的地址

当使用 取值符 * 时，取得的为右侧的数值

例如 &a 的为 0x12312312 *a 为 2024

你这时候肯定要说了，哎不应该是a为2024嘛

其实这是所有语言的一个语法糖 我们在定义一个变量的时候，都是默认设置这个变量的值

所以实际上是 （下一步动画）



