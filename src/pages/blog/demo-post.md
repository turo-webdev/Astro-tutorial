---
title: "My First Demo Blog Post"
date: 2025-12-10
description: "This is a quick demo markdown blog post in Astro."
author: "Turom"
category: "Tutorial"
layout: "../../layouts/BlogPostLayout.astro"
image:
    url: "/Astro-tutorial/cover-images/blog_cover_demo.png"
    alt: "A sleek glowing modern laptop floating in space"
---

# Welcome to my completely awesome blog

This is a demonstration of how **Astro natively supports Markdown**. 

Astro will automatically take this `.md` file inside the `src/pages/blog/` directory and build it into a fully functional HTML page located at `/blog/demo-post`.

## Features of Markdown

You can easily write formatted content:
*   Bullets points
*   **Bold text**
*   *Italic text*
*   [Links](https://astro.build/)

### Adding Images

You can use the standard Markdown syntax to add images! If you place an image in the `src/assets/` directory, Astro will automatically optimize it, crop it, and compress it for you:

![My awesome blog cover](/Astro-tutorial/cover-images/blog_cover_demo.png)

### Code Snippets

```javascript
// You can even include syntax-highlighted code blocks!
const hello = "world";
console.log(hello);
```

### Quotes
> This is a blockquote. It's great for quoting people or highlighting important information.

Enjoy creating more blog posts by just adding more markdown files to this folder!
