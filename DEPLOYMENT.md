# 部署指南 (Deployment Guide)

本指南提供多种部署方式，选择最适合你的方案。

## 🌟 方案 1: Vercel 部署（推荐 - 最简单）

Vercel 是 Next.js 的官方推荐平台，完全免费且功能强大。

### 步骤：

1. **推送代码到 GitHub**

   ```bash
   # 如果还没有远程仓库，先在 GitHub 创建一个新仓库
   # 然后执行：
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

2. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub 账号登录

3. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择你的 GitHub 仓库
   - 点击 "Import"

4. **配置（通常无需修改）**
   - Framework Preset: Next.js（自动检测）
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. **部署**
   - 点击 "Deploy"
   - 等待 2-3 分钟
   - 完成！你会得到一个 `https://your-project.vercel.app` 地址

### 优势：
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自动部署（push 到 GitHub 自动更新）
- ✅ 支持自定义域名
- ✅ 完全免费

---

## 🔧 方案 2: GitHub Pages 部署（静态导出）

GitHub Pages 只支持静态网站，需要将 Next.js 导出为静态 HTML。

### 步骤 1: 修改配置以支持静态导出

编辑 `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 添加这行
  images: {
    unoptimized: true,  // 修改这行
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
```

### 步骤 2: 创建 GitHub Actions 工作流

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 步骤 3: 推送到 GitHub

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

### 步骤 4: 在 GitHub 上启用 Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** → **Pages**
3. Source 选择 **GitHub Actions**
4. 等待部署完成

你的网站将在 `https://your-username.github.io/your-repo-name/` 访问。

### ⚠️ 注意事项：
- 如果仓库名不是 `username.github.io`，需要配置 `basePath`
- 某些 Next.js 动态功能不可用
- 图片优化功能受限

---

## 🚀 方案 3: Netlify 部署

与 Vercel 类似，也是优秀的部署平台。

### 步骤：

1. **推送代码到 GitHub**（同方案 1）

2. **访问 Netlify**
   - 打开 https://netlify.com
   - 使用 GitHub 账号登录

3. **导入项目**
   - 点击 "Add new site" → "Import an existing project"
   - 选择 GitHub
   - 选择你的仓库

4. **配置**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - 点击 "Deploy site"

5. **完成**
   - 你会得到一个 `https://your-site.netlify.app` 地址

---

## 📝 自定义域名配置

### Vercel:
1. 项目设置 → Domains
2. 添加你的域名
3. 在域名提供商处添加 DNS 记录（Vercel 会提供详细说明）

### GitHub Pages:
1. Settings → Pages → Custom domain
2. 输入你的域名
3. 在域名提供商处添加 CNAME 记录

---

## 🔄 更新网站内容

### 使用 Vercel/Netlify:
```bash
# 修改内容后
git add .
git commit -m "Update content"
git push

# 网站会自动更新！
```

### 使用 GitHub Pages:
- 同上，GitHub Actions 会自动触发部署

---

## 💡 推荐部署方案选择

| 需求 | 推荐方案 |
|------|---------|
| 最简单快速 | **Vercel** |
| 完全免费 | **Vercel** 或 **GitHub Pages** |
| 自定义域名 | **Vercel** 或 **Netlify** |
| 中国访问友好 | **Netlify** |
| 只需静态托管 | **GitHub Pages** |

---

## 🆘 常见问题

**Q: 部署后样式丢失？**
A: 检查 `next.config.js` 中的 `basePath` 配置

**Q: GitHub Pages 部署失败？**
A: 确保已在仓库设置中启用 Actions 和 Pages

**Q: 想使用自己的域名？**
A: Vercel 和 Netlify 都支持免费自定义域名，配置简单

**Q: 如何回滚到之前的版本？**
A: Vercel/Netlify 支持一键回滚，或者使用 `git revert` 回退代码

---

## 📚 相关文档

- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [Vercel 文档](https://vercel.com/docs)
- [GitHub Pages 文档](https://docs.github.com/pages)
- [Netlify 文档](https://docs.netlify.com)

---

**推荐选择 Vercel**，只需 3 分钟即可完成部署！🚀
