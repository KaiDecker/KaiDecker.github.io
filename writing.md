---
layout: default
title: 写作
description: "项目复盘、统计学习笔记，以及一些正在形成的判断。"
permalink: /writing/
---
<section class="page-hero shell narrow-shell reveal">
  <p class="eyebrow">WRITING</p>
  <h1>把没想清楚的事，<br>写到稍微清楚一点。</h1>
  <p class="page-lead">这里不会追求更新频率。文章存在的理由，是让一次学习或一次项目不只停留在“当时好像懂了”。</p>
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
      <p>可以从 `_drafts/post-template.md` 复制模板，完成后移动到 `_posts` 并按日期命名。</p>
    </div>
  {% endif %}
</section>
