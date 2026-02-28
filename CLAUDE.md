# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based static blog website called "过客小站 HapLeo" - a personal blog in Chinese by author 欢欢 (lgh06/HapLeo). The blog covers topics including Node.js, frontend development, Web technologies, Docker, DevOps, AI, and personal reflections.

**Primary domains:**
- https://blog.ahuan.tech (main)
- http://lgh06.github.io/blog (GitHub Pages)
- https://hapleo.netlify.app/ (Netlify mirror)

**Source repositories:**
- Main: https://github.com/lgh06/blog
- Backup: https://cnb.cool/lgh06/blog

## Common Commands

**Install dependencies:**
```bash
bundle install
```

**Build the site:**
```bash
bundle exec jekyll build
```

**Run development server:**
```bash
bundle exec jekyll serve
```
- Server runs on port 12000 (configured in `_config.yml`)
- Live reload is enabled

**Clean build artifacts:**
```bash
bundle exec jekyll clean
```

## Architecture and Structure

```
├── _posts/                    # Blog posts in Markdown (2016-2026)
├── _includes/                 # Reusable HTML components
│   ├── head.html             # Meta tags, jQuery, analytics scripts
│   ├── header.html           # Site navigation
│   └── footer.html           # Footer with Chinese font loading
├── _layouts/                  # Page templates
│   ├── default.html          # Base layout
│   ├── page.html             # Static page layout
│   └── post.html             # Blog post layout
├── _sass/                     # SCSS stylesheets (Minima theme)
├── css/main.scss              # Custom styles with Chinese fonts
├── js/main.js                 # Custom JavaScript (image handling, translation, analytics)
├── _config.yml                # Jekyll configuration
├── Gemfile                    # Ruby dependencies (Jekyll 3.9.4, github-pages 232)
└── index.html                 # Home page with pagination (25 posts per page)
```

## Key Customizations

**JavaScript (`js/main.js`):**
- Image click handler (opens in new tab, supports thumbnail → original)
- Image CDN fallback (pub.ahuan.tech → cf2.ahuan.tech)
- Disqus comments integration
- Translation system with multiple providers
- China region detection popup (timezone-based)
- Google Analytics, Microsoft Clarity, Baidu Analytics

**Styling (`css/main.scss`):**
- Custom Chinese fonts: KingHwa_OldSong, LXGW WenKai Mono
- 125% zoom on screens >1440px

**Blog Post Front Matter:**
```yaml
---
layout: post
title: "Post Title"
date:   2026-02-25 10:35:00 +0800
categories: tech ai
---
```

## Important Notes

- Changes to `_config.yml` require restarting the dev server
- Generated site output goes to `_site/` (gitignored)
- All blog content is in Chinese
