---
layout: page
title: "Exagium：可复查的 Coding-Agent Harness"
eyebrow: AGENT ENGINEERING · EVALUATION
description: "一个 local-first、BYOA 的 coding-agent harness，用于运行、追踪、评测和比较不同 Agent。"
permalink: /projects/exagium/
---

[查看 GitHub 仓库](https://github.com/KaiDecker/exagium)

## 项目定位

Exagium 将 coding agent 的执行过程变成可以复查的实验记录。它是 local-first、BYOA（Bring Your Own Agent）的 harness：用户可以接入本地 Agent，运行任务并比较结果，而不必把执行过程简化为一次最终输出。

执行环境使用 detached Git worktree 隔离，运行记录写入 SQLite，并通过 FastAPI read API 和 Web UI 查看。当前提供 Codex CLI 与 Claude CLI adapters，另有独立 validation 以检查结果是否满足任务要求。

<p class="secondary-copy" lang="en">Exagium is a local-first, BYOA coding-agent harness for running, tracing, evaluating, and comparing agents. Detached Git worktrees isolate runs; SQLite, a FastAPI read API, and a Web UI make execution history inspectable.</p>

## 目前可验证的结果

README 中记录了一组真实实验：3 次运行全部通过，median 用时 5.1 分钟，消耗 95,430 tokens。这些数字描述的是当前实验样本，不是对所有任务或模型的普遍结论。

## 我关注的问题

- 如何让 Agent 执行过程可以复盘，而不只保留最后的 patch；
- 如何隔离不同运行，避免工作树和副作用互相污染；
- 如何把独立 validation 纳入执行闭环；
- 如何在本地优先的前提下，为不同 Agent 和 CLI 保留可比较的记录。

## 技术关键词

Python · FastAPI · SQLite · Git worktree · Codex CLI · Claude CLI

