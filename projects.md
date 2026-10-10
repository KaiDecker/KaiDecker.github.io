---
layout: default
title: 项目 / Projects
description: "KaiDecker 做过和正在做的项目。"
permalink: /projects/
compact_header: true
---

<section class="page-hero page-hero--compact shell narrow-shell reveal">
  <p class="eyebrow">PROJECTS</p>
  <h1 class="visually-hidden">Projects</h1>
</section>

<section class="shell narrow-shell project-archive">
  {% for project in site.data.projects %}
    <article class="simple-project archive-project" id="{{ project.anchor }}">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="simple-project-links">
        {% if project.case_study_url %}<a href="{{ project.case_study_url | relative_url }}">项目介绍</a>{% endif %}
        {% if project.repository_url %}<a href="{{ project.repository_url }}" target="_blank" rel="noreferrer">GitHub</a>{% elsif project.url %}<a href="{{ project.url }}" target="_blank" rel="noreferrer">查看项目</a>{% endif %}
      </div>
    </article>
  {% endfor %}
</section>
