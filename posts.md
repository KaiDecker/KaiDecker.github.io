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
    {% assign pinned_posts = site.posts | where: 'pinned', true %}
    {% assign regular_posts = site.posts | where_exp: 'post', 'post.pinned != true' %}
    {% assign ordered_posts = pinned_posts | concat: regular_posts %}
    {% for post in ordered_posts %}
      <article class="writing-item">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y.%m.%d' }}</time>
        <div>
          <h2>{% if post.pinned %}<span class="pinned-label">置顶</span> {% endif %}<a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        </div>
      </article>
    {% endfor %}
  {% else %}
    <div class="empty-state large-empty reveal"><span class="empty-index">00</span><h2>暂时还没有公开文章。</h2><p>第一篇文章会从这里开始。</p></div>
  {% endif %}
</section>
