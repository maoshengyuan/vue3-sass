import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 引入elementUI
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, { size: 'mini' });

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
