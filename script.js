/* ================= 项目数据 =================
   新增项目：向数组添加一个对象即可（name / tag / desc / stack / date / category / image），
   页面加载时自动渲染，无需改动 HTML。 */
const PROJECTS = [
  {
    name: "个人作品集网站",
    tag: "Web应用",
    desc: "采用原生 HTML/CSS/JavaScript 构建的响应式个人作品集网站，采用「左侧介绍 + 右侧滚动展示」的布局，通过 CSS Grid 与 sticky 定位实现分区，使用 IntersectionObserver 完成导航高亮与滚动动画，桌面端与移动端均能正常显示。",
    stack: ["HTML", "CSS", "JavaScript", "Grid 布局", "IntersectionObserver"],
    date: "2026.09",
    category: "Web 开发",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    name: "Python 数据抓取脚本",
    tag: "数据采集",
    desc: "一个用于抓取指定网页公开数据并进行清洗、格式化后保存的 Python 脚本，支持异常重试与结构化存储，用于辅助课程中的数据采集与分析练习。",
    stack: ["Python", "Requests", "BeautifulSoup"],
    date: "2025.05",
    category: "Python 开发",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20web%20scraping%20and%20data%20processing%20concept%2C%20code%20editor%20window%20with%20python%20script%2C%20data%20table%20and%20charts%2C%20clean%20modern%20tech%20illustration%2C%20blue%20color%20accent%2C%20high%20quality&image_size=landscape_16_9"
  }
];

/* ================= 渲染项目列表 ================= */
const list = document.getElementById("project-list");
list.innerHTML = PROJECTS.map((p, i) => `
  <article class="project reveal">
    <div class="project-media">
      <img src="${p.image}" alt="${p.name} 项目配图" loading="lazy">
    </div>
    <div class="project-info">
      <span class="project-num">${String(i + 1).padStart(2, "0")}</span>
      <p class="project-meta">
        <span class="cat">${p.category}</span>
        <span class="dot"></span>
        <time>${p.date}</time>
      </p>
      <h3>${p.name}<span class="project-tag">${p.tag}</span></h3>
      <p class="project-desc">${p.desc}</p>
      <ul class="project-stack">
        ${p.stack.map(s => `<li>${s}</li>`).join("")}
      </ul>
    </div>
  </article>
`).join("");

/* ================= 导航高亮（滚动监听） ================= */
const navLinks = [...document.querySelectorAll(".nav a")];
const linkById = Object.fromEntries(
  navLinks.map(a => [a.getAttribute("href").slice(1), a])
);
const sectionWatcher = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove("active"));
      linkById[entry.target.id]?.classList.add("active");
    }
  });
}, { rootMargin: "-35% 0px -60% 0px" });
Object.keys(linkById).forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionWatcher.observe(el);
});

/* ================= 滚动淡入 ================= */
const revealer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      revealer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealer.observe(el));

/* ================= 页脚年份 ================= */
document.getElementById("year").textContent = new Date().getFullYear();

/* ================= 深浅色主题切换 =================
   使用 localStorage 记住用户上一次选择，刷新后保持主题不变。 */
const THEME_KEY = "theme";
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  themeToggle.title = theme === "dark" ? "切换到浅色主题" : "切换到深色主题";
}

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === "dark" || savedTheme === "light") {
  applyTheme(savedTheme); // 恢复上一次选择的主题
} else {
  themeToggle.title = "切换到深色主题"; // 默认浅色，保持 HTML 初始状态
}

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
});
