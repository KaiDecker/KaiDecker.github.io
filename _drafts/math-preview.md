---
layout: post
title: "公式排版预览（草稿）"
permalink: /math-preview/
---

正文使用中文像素字体，公式使用独立的数学字形。

## 行内公式

质能关系为 $$E = mc^2$$，下标和上标也可以写：$$x_i^2 + y_i^2 = z_i^2$$。

## 积分与求和

$$
\int_0^1 x^2\,dx = \frac{1}{3}, \qquad
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}
$$

## 矩阵与分段函数

$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \qquad
f(x) = \begin{cases} x^2, & x \ge 0 \\ -x, & x < 0 \end{cases}
$$

## 对齐

$$
\begin{aligned}
\operatorname{Var}(X) &= \mathbb{E}[X^2] - (\mathbb{E}[X])^2 \\
\mathbb{E}[aX+b] &= a\mathbb{E}[X]+b
\end{aligned}
$$

## 长公式

$$
\left(\sum_{i=1}^{n} a_i b_i\right)^2 \leq
\left(\sum_{i=1}^{n} a_i^2\right)\left(\sum_{i=1}^{n} b_i^2\right)
= (a_1^2+a_2^2+\cdots+a_n^2)(b_1^2+b_2^2+\cdots+b_n^2)
$$

## 代码和金额保持原样

行内代码 `$$x_i^2$$` 不应渲染。价格 $5 和 $10 也保持原样。

```tex
$$\frac{a}{b}$$
```
