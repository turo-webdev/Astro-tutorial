---
title: "The Final Setup: Demo Post #3"
date: 2026-01-05
description: "Wrapping up our Astro blog creation tutorial."
author: "Turom"
category: "Authoring"
layout: "../../layouts/BlogPostLayout.astro"
image:
    url: "/Astro-tutorial/cover-images/blog_cover_demo.png"
    alt: "Starry sky coding setup"
---

## Managing Markdown Content 

You've made it to the third demo post! 

Astro is incredibly powerful because it automatically registers and builds whatever `.md` files you place directly into your `src/pages/` folder hierarchy.

This gives you a beautifully managed folder-based routing structure without writing a single line of backend logic.

### Upcoming topics we should handle

Next up in learning Astro, you probably want to:

1. Create a `blog.astro` index page map that automatically lists all the markdown files located in your `src/pages/blog` folder to display previews of each post.
2. Filter those blog posts by dates or custom tags (like "technology" vs "lifestyle") defined right inside the frontmatter. 

> You can use `Astro.glob()` or the newer Content Collections API to quickly pull out all your posts!

```astro
---
// An example of finding all local posts:
const posts = await Astro.glob('./*.md');
---

<ul>
  {posts.map(post => <li>{post.frontmatter.title}</li>)}
</ul>
```
