# 刘志伟 · 个人作品集网站

基于原生 HTML / CSS / JavaScript 构建的响应式个人作品集网站，采用「左侧介绍 + 右侧滚动展示」的单页布局，支持深浅色主题切换。

## 功能特性

- **单页作品集布局**：左侧个人信息（头像标识、技能方向、页面导航、联系方式），右侧滚动展示内容
- **项目作品展示**：由 `script.js` 中的数据驱动渲染，新增项目只需向数组添加一个对象
- **深浅色主题切换**：导航侧栏顶部右侧按钮一键切换，使用 `localStorage` 记住用户上一次选择，刷新后保持主题
- **滚动交互**：IntersectionObserver 实现导航高亮与内容滚动淡入动画
- **响应式设计**：桌面端左右分栏，移动端（≤960px）自动切换为上下布局

## 技术栈

- HTML5 / CSS3（CSS Grid、CSS 变量、sticky 定位）
- 原生 JavaScript（IntersectionObserver、localStorage）
- 无框架、无第三方 UI 组件库

## 目录结构

```text
lab04/
├── index.html        # 页面结构
├── style.css         # 样式（含深色主题变量）
├── script.js         # 交互逻辑与项目数据
├── profile.md        # 个人信息
└── .trae/rules/      # Trae 项目规则文件
```

## 本地运行

直接用浏览器打开 `index.html`，或使用 VS Code / Trae 的 Live Server 插件预览。

## 作者

刘志伟 — 软件工程学生 · Web 前端方向
