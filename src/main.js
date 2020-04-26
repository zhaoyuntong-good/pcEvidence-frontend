import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  successMsg,
  errorMsg,
  warningMsg
} from './ui';
import '@/assets/css/reset.css';
import '@/assets/css/animation.css';
import '@/assets/css/public.css';
import '@/assets/css/selElement.css';

Vue.config.productionTip = false

Vue.prototype.$successMsg = successMsg;
Vue.prototype.$errorMsg = errorMsg;
Vue.prototype.$warningMsg = warningMsg;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
