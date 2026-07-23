---
layout: default
title: 项目
description: "真实做过的项目，比技能百分比更有说服力。"
permalink: /projects/
---
<section class="page-hero shell narrow-shell reveal">
  <p class="eyebrow">PROJECTS</p>
  <h1>项目不是陈列品，<br>是问题留下的路径。</h1>
  <p class="page-lead">这里收录完整度不同的实践：有些在解决一个明确问题，有些只是为了弄懂一件事。保留过程，也保留不够漂亮的部分。</p>
</section>

<section class="shell section project-archive">
  {% for project in site.data.projects %}
    <article class="archive-project reveal">
      <div class="archive-project-index">0{{ forloop.index }}</div>
      <div class="archive-project-main">
        <p class="project-eyebrow">{{ project.eyebrow }}</p>
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <div class="tag-row">
          {% for tech in project.tech %}<span class="tag">{{ tech }}</span>{% endfor %}
        </div>
      </div>
      <a class="button button-ghost archive-project-link" href="{{ project.url }}" target="_blank" rel="noreferrer">
        查看仓库 {% include icon.html name='external' %}
      </a>
    </article>
  {% endfor %}
</section>

<section class="shell note-card reveal">
  <p class="eyebrow">A NOTE</p>
  <h2>下一步会补什么？</h2>
  <p>每个重点项目会逐渐补上背景、方法、结果、踩坑和后续计划。仓库负责保存代码，这个网站负责讲清楚为什么这么做。</p>
</section>
