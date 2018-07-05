# vuetest

> my frist vue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 1. 关于

#### 1.1. 介绍

基于 vue-cli + iView 的后台管理系统，在 vue-cli 基础上做了一些合理的修改和增强。功能包括：调试、构建、代码规范校验、单元测试、国际化等。
此项目主要用来熟悉vue，未来改造成《彩虹系统》的前台

#### 1.2. 技术栈

Vue、Webpack、ES6、vue-router、Vuex、Sass、PostCSS 等。


## 2. 规范

#### 2.1. 项目结构

```
|-- build                            // Webpack 项目构建
|-- config                           // 项目开发环境配置
|-- src                              // 源码目录
|   |-- modules                      // 业务代码
|       |-- Articles                 // 文章业务模块
|       |-- Home                     // 首页
|       |-- Layout                   // 页面布局结构（除登录页外）
|       |-- Login                    // 登录页
|       |-- NotFound                 // 404 页
|       |-- Root                     // 根页面
|       |-- Unauthorized             // 未授权页面（在开发权限相关系统时有用）
|   |-- components                   // 公共组件
|   |-- i18n                         // 全局国际化
|   |-- models                       // 数据模型（主要在 store 中用到）
|   |-- router                       // 路由配置
|       |-- routes                   // 各业务模块路由配置
|   |-- store                        // Vuex 状态管理
|       |-- actions.js               // 根级别的 actions
|       |-- getters.js               // 根级别的 getters
|       |-- mutations.js             // 根级别的 mutations
|       |-- types.js                 // 根级别的 mutation types
|       |-- modules                  // 各业务模块的局部状态管理
|           |-- articles             // 文章业务模块状态管理
|   |-- styles                       // 样式
|       |-- global                   // 全局样式
|       |-- utils                    // Sass 工具集合（如：vars、mixin、function 等）
|       |-- iview                    // 第三方 UI 库的样式（如：iView 等）
|   |-- utils                        // 工具集合
|       |-- helpers                  // 帮助函数集合
|       |-- mixins                   // 混合
|       |-- auth.js                  // 权限相关
|       |-- env.js                   // 环境配置类
|       |-- fastclick.js             // 全局处理移动端 onclick 事件的延迟 300 ms 问题（仅移动端需要引入）
|       |-- consts.js                // 常量配置
|       |-- i18n.js                  // 国际化类
|       |-- init.js                  // 初始化
|       |-- polyfill.js              // polyfill
|       |-- rest.js                  // RESTful 请求类
|   |-- App.vue                      // 页面入口
|   |-- main.js                      // 程序入口，加载各种公共组件
|-- static                           // 静态文件，如：图片、JSON 数据等
|-- .babelrc                         // babel-loader 配置
|-- .editorconfig                    // 定义代码格式
|-- package.json                     // 项目基本信息
```
#### 2.2. 组件的命名规范

按照 vue-cli 的 Hello 示例，组件（这里说的是组件文件夹）命名应遵循帕斯卡（pascal）命名法，如：MyComponent。
> 当然，也有很多人喜欢命名成 my-component 的形式。这个规范不是强制性的，你可以选一种适合自己的。

#### 2.3. 公用组件规范

公用组件放在 /src/components 下。

```
|-- src                              // 源码目录
|   |-- components                   // 公用组件
|       |-- MyComponent              // MyComponent 组件
|           |-- index.vue            // MyComponent 的入口
|           |-- styles               // MyComponent 的样式
|               |-- index.scss       // MyComponent 的样式入口
|               |-- images           // MyComponent 的图片
|               |-- fonts            // MyComponent 的字体
|           |-- utils                // MyComponent 的工具集合
|           |-- i18n                 // MyComponent 的国际化
|           |-- components           // MyComponent 的子组件
|               |-- ChildComponent   // MyComponent 的子组件 ChildComponent，组件规范和 MyComponent 一致
```

#### 2.4. 业务组件规范

业务组件放在 /src/app 下，也就是一个页面，对应一个路由。规范和公用组件一直。

## 3. 参考

#### 3.1. 网址

- [Vue.js 中文网](https://cn.vuejs.org/)
- [iView - 一套基于 Vue.js 的高质量 UI 组件库](https://www.iviewui.com/)
- [vue-router 中文网](http://router.vuejs.org/zh-cn/)
- [Vuex 中文网](https://vuex.vuejs.org/zh-cn/)
- [Vuex 通俗版教程](https://yeaseonzhang.github.io/2017/03/16/Vuex-%E9%80%9A%E4%BF%97%E7%89%88/)
- [Vuex 购物车示例](https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart)
- [Vue2.0 实践阶段性分享](https://segmentfault.com/a/1190000007909108)
- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)
- [vue-devtools](https://github.com/vuejs/vue-devtools)

#### 3.2. 相关链接
- [一个极简的轻量级 Sass 工具库](https://github.com/zhaotoday/sass-utils)
- [AJAX 简单封装及使用规范](https://github.com/zhaotoday/rest)
- [基于 i18next 实现 Vue js 项目的国际化（整理中）](https://github.com/zhaotoday/i18n)
- [基于 CodeIgniter 的轻量级 PHP MVC 框架](https://github.com/zhaotoday/php-rich-app)
- [老版本的浏览器上访问时提示升级](https://github.com/zhaotoday/update-your-browser)
