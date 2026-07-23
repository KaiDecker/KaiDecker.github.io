---
layout: default
title: 写作 / Writing
description: "项目复盘、408 学习笔记、统计与机器学习记录，以及游戏和生活观察。"
permalink: /writing/
---
<section class="page-hero shell narrow-shell reveal">
  <p class="eyebrow">WRITING</p>
  <h1>把学过和做过的事，<br>写到可以再次使用。</h1>
  <p class="page-lead">计划记录 Agent 与后端项目复盘、408 学习笔记、统计和机器学习实验，也会偶尔写游戏、吉他与生活。更新频率不是目标，留下能复查的思路才是。</p>
  <p class="secondary-copy" lang="en">Project retrospectives, 408 notes, statistics, machine learning, and occasional writing about games and life.</p>
</section>

<section class="shell narrow-shell section writing-archive">
  {% if site.posts.size > 0 %}
    {% for post in site.posts %}
      <article class="writing-item reveal">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y.%m.%d' }}</time>
        <div>
          <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          {% if post.description %}<p>{{ post.description }}</p>{% endif %}
          {% if post.tags %}
            <div class="tag-row">
              {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
            </div>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  {% else %}
    <div class="empty-state large-empty reveal">
      <span class="empty-index">00</span>
      <h2>暂时还没有公开文章。</h2>
      <p>第一批内容会从项目复盘和 408 学习笔记开始。可以复制 `_drafts/post-template.md`，完成后移动到 `_posts` 并按日期命名。</p>
    </div>
  {% endif %}
</section>
