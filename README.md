# CreativeNav - 创意导航

## 项目描述

CreativeNav 是一个现代化的网页导航工具，提供分类整理的网站链接，具有美观的 UI 和响应式设计。

## 部署指南

本项目提供两种部署方式：

1.  **多文件部署 (推荐)**：
    *   上传 `index.html`, `style.css`, 和 `script.js` 到您的服务器或托管平台。
    *   确保这三个文件位于同一目录下。
    *   访问 `index.html` 即可。

2.  **单文件部署**：
    *   上传 `nav.html` 文件到您的服务器或托管平台。
    *   `nav.html` 已包含所有必要的样式和脚本，无需其他文件。
    *   直接访问 `nav.html` 即可。

以下是一些具体的托管平台部署示例：

### Cloudflare Pages

1. 登录 Cloudflare 账户
2. 选择"Pages"并点击"创建项目"
3. 连接 GitHub 仓库
4. 选择仓库分支
5. 设置构建命令为空（本项目是纯静态 HTML）
6. 设置发布目录为根目录
7. 点击"保存并部署"

### GitHub Pages

1. 将项目推送到 GitHub 仓库
2. 进入仓库设置
3. 选择"Pages"选项
4. 选择部署分支（通常是 main 或 master）
5. 选择根目录
6. 点击"保存"

## 使用说明

- 点击分类按钮切换不同资源类别
- 点击卡片访问对应网站

### 如何添加新链接？

1.  打开 `index.html` 文件（如果是单文件部署，则打开 `nav.html`）。
2.  找到你想添加链接的目标分类 `<section class="category" data-category="分类标识">`。
3.  在 `<div class="resource-grid">` 内，仿照现有链接的格式添加一个新的 `<a>` 标签，例如：
    ```html
    <a
      href="新网站链接"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="网站名称"
      class="link-card"
      data-category="分类标识"
    >
      <div class="icon-wrapper">
        <!-- Font Awesome 图标, 例如 <i class="fas fa-link"></i> -->
        <i class="图标类名"></i>
      </div>
      <h3>网站名称</h3>
    </a>
    ```
4.  确保替换 `href`, `aria-label`, `data-category`, 图标类名 (`<i>` 标签) 和 `<h3>` 中的网站名称。
5.  保存文件。

### 如何添加新分类？

1.  打开 `index.html` 文件（如果是单文件部署，则打开 `nav.html`）。
2.  **添加分类按钮**：在 `<nav class="navbar">` 内，添加一个新的 `<button>`，指定 `data-category` 属性为你新分类的唯一标识（建议使用英文或拼音），并添加图标：
    ```html
    <button data-category="新分类标识">
      <i class="图标类名"></i>新分类名称
    </button>
    ```
3.  **添加分类内容区域**：在 `<main class="main">` 内的 `container` 中，添加一个新的 `<section>`，`data-category` 属性必须与上面按钮的 `data-category` 相同：
    ```html
    <section class="category" data-category="新分类标识">
      <div class="category-title">
        <i class="图标类名"></i>
        <h2>新分类名称</h2>
      </div>
      <div class="resource-grid">
        <!-- 在这里添加该分类下的链接卡片 -->
      </div>
    </section>
    ```
4.  确保替换 `data-category`, 图标类名, 以及分类名称。
5.  在新分类的 `<div class="resource-grid">` 中添加链接卡片（参考“如何添加新链接？”）。
6.  保存文件。`script.js` 会自动处理新分类的切换逻辑。

---

# CreativeNav - Navigation Tool

## Project Description

CreativeNav is a modern web navigation tool with categorized website links, featuring beautiful UI and responsive design.

## Deployment Guide

This project offers two deployment methods:

1.  **Multi-file Deployment (Recommended)**:
    *   Upload `index.html`, `style.css`, and `script.js` to your server or hosting platform.
    *   Ensure these three files are in the same directory.
    *   Access `index.html`.

2.  **Single-file Deployment**:
    *   Upload the `nav.html` file to your server or hosting platform.
    *   `nav.html` includes all necessary styles and scripts; no other files are needed.
    *   Access `nav.html` directly.

Below are deployment examples for specific hosting platforms:

### Cloudflare Pages

1. Log in to Cloudflare account
2. Select "Pages" and click "Create a project"
3. Connect GitHub repository
4. Select repository branch
5. Set build command to empty (this is pure static HTML)
6. Set publish directory to root
7. Click "Save and Deploy"

### GitHub Pages

1. Push project to GitHub repository
2. Go to repository settings
3. Select "Pages" option
4. Choose deployment branch (usually main or master)
5. Select root directory
6. Click "Save"

## Usage

- Click category buttons to switch between resource types
- Click cards to visit corresponding websites

### How to Add a New Link?

1.  Open the `index.html` file (or `nav.html` for single-file deployment).
2.  Find the target category section `<section class="category" data-category="category-identifier">` where you want to add the link.
3.  Inside the `<div class="resource-grid">`, add a new `<a>` tag following the format of existing links, for example:
    ```html
    <a
      href="new_website_url"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Website Name"
      class="link-card"
      data-category="category-identifier"
    >
      <div class="icon-wrapper">
        <!-- Font Awesome icon, e.g., <i class="fas fa-link"></i> -->
        <i class="icon-class-name"></i>
      </div>
      <h3>Website Name</h3>
    </a>
    ```
4.  Make sure to replace `href`, `aria-label`, `data-category`, the icon class name (in the `<i>` tag), and the website name in `<h3>`.
5.  Save the file.

### How to Add a New Category?

1.  Open the `index.html` file (or `nav.html` for single-file deployment).
2.  **Add Category Button**: Inside `<nav class="navbar">`, add a new `<button>`. Specify the `data-category` attribute with a unique identifier for your new category (English or Pinyin recommended) and add an icon:
    ```html
    <button data-category="new-category-identifier">
      <i class="icon-class-name"></i>New Category Name
    </button>
    ```
3.  **Add Category Content Area**: Inside `<main class="main">` within the `container`, add a new `<section>`. The `data-category` attribute must match the button's `data-category`:
    ```html
    <section class="category" data-category="new-category-identifier">
      <div class="category-title">
        <i class="icon-class-name"></i>
        <h2>New Category Name</h2>
      </div>
      <div class="resource-grid">
        <!-- Add link cards for this category here -->
      </div>
    </section>
    ```
4.  Ensure you replace `data-category`, icon class names, and category names.
5.  Add link cards within the new category's `<div class="resource-grid">` (refer to "How to Add a New Link?").
6.  Save the file. `script.js` will automatically handle the switching logic for the new category.
