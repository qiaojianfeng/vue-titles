### 作用
Vuejs 单页应用在iOS系统下部分APP的webview中 标题不能通过 document.title = xxx 的方式修改
该插件只为解决该问题而生(兼容安卓)
> 参考来源：vue-wechart-title
`去掉favicon，精简完善版本`

### 安装

> Vuejs 1.x

```bash
npm install vue-titles --save
```

> Vuejs 2.x

```bash
npm install vue-titles --save
```

##### ES6
> main.js

```js
Vue.use(require('vue-titles'))
```
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
    name: 'Order',
    path: '/order',
    meta: {
      title: '订单'
    },
    component: require('../views/Order.vue')
  },
  {
    name: 'UCenter',
    path: '/ucenter',
    meta: {
      title: '用户中心'
    },
    component: require('../views/UCenter.vue')
  }
]
// ...
```

> App.vue **建议全局只使用一次该指令 标题可用vuex或者router中定义 不要多处使用!!**

```html
<!-- 任意元素中加 v-title 指令 建议将标题放在 route 对应meta对象的定义中 -->
<div v-title="$route.meta.title"></div>
<!--or-->
<router-view v-title="$route.meta.title"></router-view>
```

### 欢迎提交PR