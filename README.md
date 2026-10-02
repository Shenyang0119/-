# 沈阳 · AIGC 视觉作品集

这是沈阳的 AIGC 视觉作品集。网页成品位于 `dist/`，无需安装依赖或运行构建命令。

## Cloudflare Pages 发布配置

- Production branch：`main`
- Framework preset：`None`
- Build command：`exit 0`
- Build output directory：`dist`

Cloudflare Pages 连接本仓库后，每次向 `main` 分支推送更新都会自动重新部署。

## 注意事项

- 只提交网页使用的压缩素材，不要加入视频原片、工程文件或个人隐私资料。
- 页面资源使用相对路径，可部署在 Cloudflare Pages 默认域名或自定义域名下。
- 不要使用 Git LFS 存储网页视频；本项目的视频均直接作为普通 Git 文件提交。
- 如果替换作品，请同时更新 `dist/assets/` 中的文件以及 `dist/app.js` 中的作品信息。
