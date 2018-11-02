# vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

```

```js
//main.js
Vue.prototype.GLOBAL = global; //设置全局变量
//事件监听
$on('text', function(msg) {
  console.log(msg)
});
//事件触发
$emit('text', msg);

```

## transition
\<transition name="fade">\</transition>

fade-enter：进入过渡的开始状态，元素被插入时生效，只应用一帧后立即删除；
fade-enter-active：进入过渡的结束状态，元素被插入时就生效，在过渡过程完成之后移除；
fade-leave：离开过渡的开始状态，元素被删除时触发，只应用一帧后立即删除；
fade-leave-active：离开过渡的结束状态，元素被删除时生效，离开过渡完成之后被删除；