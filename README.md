<div align="center">
  <img width="120" src="./web/public/logo.png" alt="Vue3 Admin">
  <h1>Vue3 Admin</h1>
  <p>前端的全栈之路 - 现代化后台管理系统解决方案</p>
  
  <p>
    <a href="https://github.com/baiwumm/vue3-admin/stargazers"><img src="https://img.shields.io/github/stars/baiwumm/vue3-admin" alt="stars"></a>
    <img src="https://img.shields.io/badge/Vue-3.5-brightgreen" alt="Vue">
    <img src="https://img.shields.io/badge/Pinia-latest-orange" alt="Pinia">
    <img src="https://img.shields.io/badge/Nest.js-latest-red" alt="Nest.js">
    <img src="https://img.shields.io/badge/PostgreSQL-latest-blue" alt="PostgreSQL">
    <a href="https://github.com/baiwumm/vue3-admin/blob/main/LICENSE"><img src="https://img.shields.io/github/license/baiwumm/vue3-admin" alt="license"></a>
  </p>
</div>

## 📚 项目简介
[Vue3 Admin](https://vue3.baiwumm.com/) 是一个现代化的全栈后台管理系统，前端基于 [Soybean Admin](https://docs.soybeanjs.cn/) 二次开发，后端采用 [Nest.js](https://nestjs.com/) 构建。本项目集成了当前流行的前后端技术栈，是学习全栈开发的理想参考项目。

### 🚀 技术栈
- **前端**：[Vue 3.5](https://cn.vuejs.org/)、[Ant Design Vue](https://www.antdv.com/)、[UnoCSS](https://unocss.dev/)、[Pinia](https://pinia.vuejs.org/)
- **后端**：[Nest.js](https://nestjs.com/)、[PostgreSQL](https://www.postgresql.org/)、[Prisma](https://prisma.yoga/)

### 🔗 快速链接
- 📌 **在线预览**：[https://vue3.baiwumm.com/](https://vue3.baiwumm.com/)
- 🔑 **测试账号**：用户名 `Admin`，密码 `abc123456`
- 📝 **API文档**：[Swagger 接口文档](https://vue3.baiwumm.com/docs)

> ❤️ 如果这个项目对你有帮助，请给个 Star 支持作者，感谢！

## ✨ 系统特性
- **🌐 动态国际化**：支持多语言配置，轻松切换不同语言环境
- **📝 操作日志记录**：自动记录用户的 CRUD 操作，方便追踪和审计
- **🔐 完善的权限系统**：用户与角色的精确映射，基于角色动态生成路由菜单
- **📢 实时消息通知**：基于 SSE (Server-Sent Events) 的消息公告推送系统
- **🧩 丰富的业务组件**：集成多种实用的业务功能和交互效果
- **🎨 现代化 UI 设计**：基于 Ant Design Vue 的美观界面，提供良好的用户体验

## 🔧 环境要求
> 💡 推荐使用 [pnpm](https://pnpm.io/zh/) 作为包管理工具

| 依赖项 | 最低版本 | 推荐版本 | 说明 |
|--------|---------|---------|------|
| [Node.js](https://nodejs.org/) | 18.12.0 | 18.19.0+ | JavaScript 运行环境 |
| [Pnpm](https://pnpm.io/zh/) | 8.7.0 | 最新版 | 高效的包管理工具 |
| [Git](https://git-scm.com/) | - | 最新版 | 版本控制工具 |
| [PostgreSQL](https://www.postgresql.org/) | - | 最新版 | 关系型数据库 |

## 🚀 快速开始

### 1. 数据库配置
```bash
# 安装 PostgreSQL 数据库
# 导入 /postgreSQL 目录中的数据文件
# 修改 /server/.env 文件中的数据库连接配置
DATABASE_URL="postgresql://postgres:123456@localhost:5432/vue3-admin?schema=public"
```

### 2. 克隆项目
```bash
# 克隆仓库
git clone https://github.com/baiwumm/vue3-admin.git
cd vue3-admin
```

### 3. 安装依赖
```bash
# 全局安装 pnpm (如果尚未安装)
npm install -g pnpm

# 前端依赖安装
cd web
pnpm install

# 后端依赖安装
cd ../server
pnpm install
```

### 4. 开发模式
```bash
# 前端开发服务
cd web
pnpm dev

# 后端开发服务
cd server
pnpm start:dev
```

### 5. 构建项目
```bash
# 前端构建
cd web
pnpm build

# 后端构建
cd server
pnpm build
```

## 📋 新增路由菜单指南

1. **创建视图文件**
   - 在 `web/src/views` 目录下新建 `文件夹/index.vue` 文件

2. **配置国际化路由**
   - 进入系统 → 系统管理 → 国际化 → route
   - 添加对应的路由配置

3. **添加菜单项**
   - 进入系统 → 系统管理 → 菜单管理
   - 按照规则添加新菜单
   - 路由配置参考：[Soybean Admin 系统路由文档](https://docs.soybeanjs.cn/zh/guide/router/intro.html)

4. **分配权限**
   - 进入系统 → 系统管理 → 角色管理
   - 在编辑状态中为相应角色勾选新增的菜单
   - 保存并刷新页面，新菜单将会生效

## 📚 功能模块

<table>
  <tr>
    <td width="50%">
      <h3>基础功能</h3>
      <ul>
        <li>✅ 登录 / 注销</li>
        <li>✅ 首页仪表盘</li>
        <li>✅ 个人中心</li>
        <li>✅ 关于页面</li>
      </ul>
      <h3>智能行政</h3>
      <ul>
        <li>✅ 消息公告</li>
        <li>✅ 组织管理</li>
        <li>✅ 岗位管理</li>
        <li>✅ 组织架构</li>
      </ul>
      <h3>系统设置</h3>
      <ul>
        <li>✅ 用户管理</li>
        <li>✅ 菜单管理</li>
        <li>✅ 角色管理</li>
        <li>✅ 国际化配置</li>
        <li>✅ 操作日志</li>
      </ul>
    </td>
    <td width="50%">
      <h3>功能页</h3>
      <ul>
        <li>✅ 验证码</li>
        <li>✅ 打印功能</li>
        <li>✅ 拾色器</li>
        <li>✅ 甘特图</li>
        <li>✅ 图片预览</li>
        <li>✅ 自定义 Vue 指令</li>
        <li>✅ 懒加载</li>
        <li>✅ 图片取色盘</li>
        <li>✅ 系统级取色器</li>
        <li>✅ 文件预览</li>
        <li>✅ 流程图</li>
        <li>✅ 瀑布流</li>
        <li>✅ Swiper 轮播</li>
      </ul>
      <h3>技术文档</h3>
      <ul>
        <li>✅ Soybean（内链）</li>
        <li>✅ Vue3</li>
        <li>✅ Nest.js</li>
        <li>✅ Ant Design Vue</li>
        <li>✅ UnoCSS</li>
      </ul>
    </td>
  </tr>
</table>

## 📷 系统截图

<table>
  <tr>
    <td><img src="./web/src/assets/demo/1.jpg" alt="登录页面"></td>
    <td><img src="./web/src/assets/demo/2.jpg" alt="首页仪表盘"></td>
  </tr>
  <tr>
    <td><img src="./web/src/assets/demo/3.jpg" alt="消息公告"></td>
    <td><img src="./web/src/assets/demo/4.png" alt="组织管理"></td>
  </tr>
  <tr>
    <td><img src="./web/src/assets/demo/5.jpg" alt="岗位管理"></td>
    <td><img src="./web/src/assets/demo/6.jpg" alt="组织架构"></td>
  </tr>
  <tr>
    <td><img src="./web/src/assets/demo/7.jpg" alt="功能页-验证码"></td>
    <td><img src="./web/src/assets/demo/8.jpg" alt="功能页-打印"></td>
  </tr>
  <tr>
    <td><img src="./web/src/assets/demo/9.jpg" alt="功能页-拾色器"></td>
    <td><img src="./web/src/assets/demo/10.jpg" alt="功能页-甘特图"></td>
  </tr>
  <tr>
    <td><img src="./web/src/assets/demo/11.jpg" alt="系统设置-用户管理"></td>
    <td><img src="./web/src/assets/demo/12.jpg" alt="系统设置-菜单管理"></td>
  </tr>
  <tr>
    <td><img src="./web/src/assets/demo/13.jpg" alt="系统设置-角色管理"></td>
    <td><img src="./web/src/assets/demo/14.jpg" alt="系统设置-国际化"></td>
  </tr>
  <tr>
    <td><img src="./web/src/assets/demo/15.jpg" alt="系统设置-操作日志"></td>
    <td><img src="./web/src/assets/demo/16.jpg" alt="关于页面"></td>
  </tr>
</table>

## 📝 项目说明
1. 本项目主要用于学习和技术交流，可能存在一些未经严格测试的功能点
2. 仅供学习和个人非商业用途使用
3. 欢迎通过 [Issues](https://github.com/baiwumm/vue3-admin/issues) 提交问题反馈
4. 欢迎提交 [Pull Requests](https://github.com/baiwumm/vue3-admin/pulls) 参与项目改进

## 🙏 特别鸣谢
<div align="center">
  <p><b>本项目 CDN 加速及安全防护由 Tencent EdgeOne 赞助</b></p>
  <a href="https://edgeone.ai/zh?from=github" target="_blank">
    <img width="300" src="./EdgeOne.png" alt="Tencent EdgeOne">
  </a>
  <p><a href="https://edgeone.ai/zh?from=github" target="_blank">亚洲最佳CDN、边缘和安全解决方案 - Tencent EdgeOne</a></p>
</div>

## 📄 许可证

本项目基于 [MIT许可证](./LICENSE) 开源。

## ⭐ Star 历史

<div align="center">
  
  [![Star History Chart](https://api.star-history.com/svg?repos=baiwumm/vue3-admin&type=Date)](https://star-history.com/#baiwumm/vue3-admin&Date)
  
</div>
