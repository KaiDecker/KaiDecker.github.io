---
layout: default
title: Posts
description: "KaiDecker 的文章和学习记录。"
permalink: /posts/
compact_header: true
---

<section class="page-hero page-hero--compact shell narrow-shell reveal">
  <p class="eyebrow">POSTS</p>
  <h1 class="visually-hidden">Posts</h1>
</section>

<section class="shell narrow-shell section writing-archive">
  {% if site.posts.size > 0 %}
    {% for post in site.posts %}
      <article class="writing-item">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y.%m.%d' }}</time>
        <div>
          <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        </div>
      </article>
    {% endfor %}
  {% else %}
    <div class="empty-state large-empty reveal"><span class="empty-index">00</span><h2>暂时还没有公开文章。</h2><p>第一篇文章会从这里开始。</p></div>
  {% endif %}
</section>
