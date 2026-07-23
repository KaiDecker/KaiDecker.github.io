---
layout: default
title: 项目 / Projects
description: "咸蛋超人迪卡的 Agent、机器学习、数学建模与计算机科学项目。"
permalink: /projects/
---
<section class="page-hero shell narrow-shell reveal">
  <p class="eyebrow">PROJECTS</p>
  <h1>项目不是技能清单，<br>是学习留下的证据。</h1>
  <p class="page-lead">这里收录完整度不同的实践：Agent、计算机视觉、数学建模与计算机基础。它们未必都成熟，但每一个都比自评百分比更接近真实。</p>
  <p class="secondary-copy" lang="en">A growing archive of agent engineering, computer vision, mathematical modeling, and computer science coursework.</p>
</section>

<section class="shell section project-archive">
  {% for project in site.data.projects %}
    <article class="archive-project reveal">
      <div class="archive-project-index">0{{ forloop.index }}</div>
      <div class="archive-project-main">
        <p class="project-eyebrow">{{ project.eyebrow }}</p>
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        {% if project.description_en %}<p class="project-description-en archive-description-en" lang="en">{{ project.description_en }}</p>{% endif %}
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
  <p class="eyebrow">NEXT</p>
  <h2>下一步不只是加项目数量。</h2>
  <p>重点项目会逐步补上问题背景、我的工作、方法选择、结果、失败案例和后续计划。仓库保存代码，这个网站负责把过程讲清楚。</p>
</section>
