import Vue from 'vue';
import App from './components/App.vue';
import store from './vuex/store';
import './assets/styles/style.css';
import router from './router/router';
import 'material-design-icons-iconfont';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
