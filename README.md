### 作用

Vuejs 单页应用在 iOS 系统下部分 APP 的 webview 中 标题不能通过 document.title = xxx 的方式修改
该插件只为解决该问题而生(兼容安卓)

### 安装

> Vuejs 2.x

```bash
npm install vue-titles --save
```

##### ES6

> main.js

```js
Vue.use(require('vue-titles'));
```

## 使用场景 1 ：单页面应用切换路由跳转更新 title

> 路由定义(只截取一部分)

```js
// ...
const routes = [
  {
    name: 'Home',
    path: '/home',
    meta: {
      title: '首页'
    },
    component: require('../views/Home.vue')
  },
  {
    name: 'UCenter',
    path: '/ucenter',
    meta: {
      title: '用户中心'
    },
    component: require('../views/UCenter.vue')
  }
];
// ...
```

> App.vue **建议全局只使用一次该指令 标题可用 vuex 或者 router 中定义 不要多处使用!!**

```html
<!-- 任意元素中加 v-title 指令 建议将标题放在 route 对应meta对象的定义中 -->
<div v-title="$route.meta.title"></div>
<!--or-->
<router-view v-title="$route.meta.title"></router-view>
```

## 使用场景 2：同一个路由不同状态需要手动设置 title

```js
// 需要的地方直接调用
this.$setTitle('厉害了我的哥！');
```
